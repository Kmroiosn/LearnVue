///
// 在使用自己写的包含 Vue 的 main.js 前一定先引入 Vue 的 js 包
// <script src="http://unpkg.com/vue@next">
///
const upvoteApp = {};

Vue.createApp(upvoteApp).mount("#app"); // 创建 Vue 应用并挂载到特定标签上
// 创建和挂载成功后，vue.js 在任意位置都可以调用这个 应用变量 upvoteApp

