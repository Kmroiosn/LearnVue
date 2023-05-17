///
// 在使用自己写的包含 Vue 的 main.js 前一定先引入 Vue 的 js 包
// <script src="http://unpkg.com/vue@next">
///

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

    // methods 属性用于存储和应用实例绑定的方法
    methods: {
        // 在 Vue 中，当状态更新时会使视图 View 更新，因此当数据变化后，
        // 投票信息显示的数据和位置也会发生变化
        upvote(submissionId) {
            const submission = this.submissions.find(
                (sub) => sub.id === submissionId
            );
            submission.votes++;
        }

    },

};

Vue.createApp(upvoteApp).mount("#app"); // 创建 Vue 应用并挂载到特定标签上
// 创建和挂载成功后，vue.js 在任意位置都可以调用这个 应用变量 upvoteApp

