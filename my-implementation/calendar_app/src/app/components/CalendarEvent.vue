<template>
    <div class="day-event" :style="getEventBackgroundColor">
        <div v-if="!event.edit">
            <span class="has-text-centered details">{{ event.details }}</span>
            <div class="has-text-centered icons">
                <i class="fa fa-pencil-square edit-icon" @click="editEvent(day.id, event.details)"></i>
                <i class="fa fa-trash delete-icon" @click="deleteEvent(day.id, event.details)"></i>
            </div>
        </div>
        <div v-if="event.edit">
            <input type="text" :placeholder="event.details" v-model="newEventDetails">
            <div class="has-text-centered icons">
                <i class="fa fa-check" @click="updateEvent(day.id, event.details, newEventDetails)"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../store.js";

export default {
    name: 'CalendarEvent',
    props: ['event', 'day'],
    data() {
        return {
            newEventDetails: "",
        };
    },
    computed: {
        getEventBackgroundColor() {
            const colors = ['#ff9999', '#85d6ff', '#99ff99'];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            return `background-color: ${randomColor}`;
        }
    },
    methods: {
        editEvent(dayId, eventDetails) {
            store.editEvent(dayId, eventDetails);
        },
        updateEvent(dayId, originalEventDetails, updatedEventDetails) {
            // 当修改为空时使用原来的事件细节
            if (updatedEventDetails === '') updatedEventDetails = originalEventDetails;
            store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
            this.newEventDetails = '';
        },
        deleteEvent(dayId, eventDetails) {
            store.deleteEvent(dayId, eventDetails);
        },
    },
}
</script>

<style lang="scss" scoped>
.day-event {
    margin-top: 6px;
    margin-bottom: 6px;
    display: block;
    color: #4C4C4C;
    padding: 5px;

    .details {
        display: block;
    }

    .icons .fa {
        padding: 0 2px;
    }

    input {
        background: none;
        border: 0;
        border-bottom: 1px solid #FFF;
        width: 100%;

        &:focus {
            outline: none;
        }
    }
}
</style>