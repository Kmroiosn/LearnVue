import { createApp } from "vue";
import App from "./app/App.vue";

///
// 应用最终的组件结构：
//  - App: 父容器
//
//  - CalendarWeek: 展示一行 CalendarDay
//      - CalendarDay: 展示其列表中的天事件
//          - CalendarEvent: 展示一个事件
//
//  - CalendarEntry: 展示日历表表格
//
///
// 从开局一双手搭建 Vue 应用：
//  1. 构建应用的静态版本
//  2. 将应用分解为多个组件
//  3. 用父-子数据流硬编码初始状态
//  4. 使状态可变并创建组件调度
//

createApp(App).mount("#app");