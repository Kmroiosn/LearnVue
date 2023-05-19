// 使用 mitt 创建 EventBus
const emitter = mitt();

const inputComponent = {
    template: `<input class="input is-small" 
                type="text" :placeholder="placeholder"
                v-model="input" @keyup.enter="monitorEnterKey">`,
                // 使用 @keyup.<key>="funcName" 监听按键松开事件
    props: ['placeholder'],
    data() {
        return {
            input: "",
        };
    },
    // 类似 props, 组件可以显示地通过 emits 来声明它将触发的事件
    emits: ["add-note"],
    methods: {
        // 在组件的模版表达式中可以直接使用 $emit 方法触发自定义事件
        // 例：@click="$emit('EventName')"
        // 或者像下面一样，在方法调用中使用 this.$emit('EventName', ...) 来触发自定义事件
        monitorEnterKey() {
            // Vue 的自定义事件触发
            // this.$emit("add-note", {
            //     note: this.input,
            //     timestamp: new Date().toLocaleString(),
            // });
            
            // 使用 mitt 创建的事件总线触发
            emitter.emit('add-note', {
                note: this.input,
                timestamp: new Date().toLocaleString(),
            });
            this.input = '';
        },
    },
}

const app = {
    data() {
        return {
            notes: [],
            timestamps: [],
            placeholder: 'Enter a note',
        };
    },
    components: {
        'input-component': inputComponent
    },
    methods: {
        // index.html 中的 input-component 监听到 add-note 事件后调用该方法
        addNote(event) {
            this.notes.push(event.note);
            this.timestamps.push(event.timestamp);
        }
    },
    created() {
        // 因为使用 mitt 的事件总线，不能直接使用 @event-name="..."
        // 所以在 app 创建时建立 mitt 的监听
        emitter.on('add-note', (event) => this.addNote(event));
    },
};

Vue.createApp(app).mount('#app');