///
// 在使用自己写的包含 Vue 的 main.js 前一定先引入 Vue 的 js 包
// <script src="http://unpkg.com/vue@next">
///

// 创建投票信息模版
const submissionComponent = {
    template:  `
    <div style="display: flex; width: 100%">
        <figure class="media-left">
            <img class="image is-64x64"
                :src="submission.submissionImage">
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>
                        <a :href="submission.url" class="has-text-info">
                            {{ submission.title }}
                        </a>
                        <span class="tag is-small">#{{ submission.id }}</span>
                    </strong>
                    <br>
                    {{ submission.description }}
                    <br>
                    <small class="is-size-7">
                        Submitted by:
                        <img class="image is-24x24"
                            :src="submission.avatar">
                    </small>
                </p>
            </div>
        </div>
        <div class="media-right">
            <span class="icon is-small" @click="upvote(submission.id)">
                <i class="fa fa-chevron-up"></i>
                <strong class="has-text-info">{{ submission.votes }}</strong>
            </span>
        </div>
    </div>`,

    // 组件需要使用父组件提供的数据时需要显示声明
    props: ["submission", "submissions"],

    methods: {
        upvote(submissionId) {
            const submission = this.submissions.find(
                sub => sub.id === submissionId
            );

            submission.votes++;
        }
    }
};


// 应用实例也可以返回需要在视图里处理的数据
// 但必须声明在这个应用变量中的 data() 方法里。
const upvoteApp = {
    data() {
        return {
            // 创建一个变量 submissions, 值在 seed.js 的 Seed.submissions 中
            submissions: Seed.submissions
        }
    },

    // 让投票信息按票数顺序摆放，需要将数据进行排序
    // computed 属性用于处理视图中展示的需要“复杂”计算的信息
    computed: {

        // 引入一个属性给数据排序
        sortedSubmissions() {
            return this.submissions.sort((a, b) => b.votes - a.votes);
        }
    },

    components: {
        // 将上面的投票信息组件注册进应用实例中
        // 在 HTML 中通过 submission-component 标签即可使用
        "submission-component": submissionComponent,
    },

};

Vue.createApp(upvoteApp).mount("#app"); // 创建 Vue 应用并挂载到特定标签上
// 创建和挂载成功后，vue.js 在任意位置都可以调用这个 应用变量 upvoteApp

