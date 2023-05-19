import { reactive } from 'vue';
import { seedData } from "./seed.js"

export const store = {
    state: {
        // reactive() 将产生一个由 Vue 记录的对象，使其可以在
        // 多个组件间调用而保持一致性
        data: reactive(seedData)
    },
    getActiveDay() {
        return this.state.data.find((day) => day.active);
    },
    setActiveDay(dayId) {
        this.state.data.map((day) => {
            day.active = day.id === dayId ? true : false;
        });
    },
    submitEvent(eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({'details': eventDetails, "edit": false});
    },
}