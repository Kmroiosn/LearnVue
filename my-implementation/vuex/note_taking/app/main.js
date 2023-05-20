// State: 整个应用的存储状态
const state = {
    notes: [],
    timestamps: [],
};

// Mutations: 用于变更状态，必须是同步进行，异步则在 Actions 调用突变前处理完成
const mutations = {
    ADD_NOTE(state, payload) {
        let newNote = payload;
        state.notes.push(newNote);
    },
    ADD_TIMESTAMP(state, payload) {
        let newTimeStamp = payload;
        state.timestamps.push(newTimeStamp);
    },
};

// Actions: 用于调用 Mutations 的函数，在处理、提交 Mutations 前可以是异步逻辑
const actions = {
    // 与突变类似，操作会自动接收一个对象作为第一个参数。在动作中，这个对象被视为上下文对象 (context)，
    // 它允许我们使用 context.state 访问状态，
    // 同时访问 context.getters 以及用 context.commit 调用和提交 Mutations
    addNote(context, payload) {
        context.commit('ADD_NOTE', payload);
    },
    addTimeStamp(context, payload) {
        context.commit('ADD_TIMESTAMP', payload);
    },
};

// Getters: 类似于 computed, 用于获取存储计算信息
const getters = {
    getNotes: state => state.notes, // ES6 箭头函数 (省略return和大括号)
    getTimestamps: state => state.timestamps,
    getNoteCount: state => state.notes.length,
};

// Vuex Store: 通过 Vuex Store 获取上下文 context
const store = Vuex.createStore({
    // ES6 中可以用键值对创建对象
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
});


const inputComponent = {
    template: `<input placeholder='Enter a note' class="input is-small" type="text" />`,
    
};

const app = Vue.createApp({
    components: {
        'input-component': inputComponent,
    },
    
});

// 将 Vuex Store 注入 Vue 应用实例
app.use(store);
app.mount('#app');