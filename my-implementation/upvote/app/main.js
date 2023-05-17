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

};

Vue.createApp(upvoteApp).mount("#app"); // 创建 Vue 应用并挂载到特定标签上
// 创建和挂载成功后，vue.js 在任意位置都可以调用这个 应用变量 upvoteApp

