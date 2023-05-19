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
    editEvent(dayId, eventDetails) {
        this.resetEditOfAllEvents();
        const eventObj = this.getEventObj(dayId, eventDetails);
        eventObj.edit = true;
    },
    resetEditOfAllEvents() {
        this.state.data.map((dayObj) => {
            dayObj.events.map((event) => {
                event.edit = false;
            })
        });
    },
    updateEvent(dayId, originalEventDetails, newEventDetails) {
        // 找到特定事件
        const eventObj = this.getEventObj(dayId, originalEventDetails);
        // 将事件细节修改后将edit改为false
        eventObj.details = newEventDetails;
        eventObj.edit = false;
    },
    getEventObj(dayId, eventDetails) {
        const dayObj = this.state.data.find((day) => day.id === dayId);
        return dayObj.events.find((event) => event.details === eventDetails);
    },
    deleteEvent(dayId, eventDetails) {
        const dayObj = this.state.data.find(day => day.id ===dayId);
        const eventIndexToRemove = dayObj.events.findIndex(
            event => event.details === eventDetails
        );
        dayObj.events.splice(eventIndexToRemove, 1);
    }
}