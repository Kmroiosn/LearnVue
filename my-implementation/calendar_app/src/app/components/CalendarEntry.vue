<template>
	<div id="calendar-entry">
		<div class="calendar-entry-note">
			<!-- v-model: 双向绑定数据，加强版的v-bind，视图的数据改变时带动状态改变 -->
			<input type="text" placeholder="New Event" v-model="inputEntry" required />
			<p class="calendar-entry-day">Day of event: <span class="bold">{{ titleOfActiveDay }}</span></p>
			<a class="button is-primary is-small is-outlined" @click="submitEvent(inputEntry)">
				Submit
			</a>
		</div>
		<!-- v-if: 当内容为true时显示当前元素 -->
		<p style="color:red; font-size:13px;" v-if="error">
			You must type something first!
		</p>
	</div>
</template>

<script>
import { store } from '../store.js';

export default {
	name: "CalendarEntry",
	data() {
		return {
			// 使用 v-model 双向绑定数据创建CalendarEvent
			// 新建时保证 input 中数据为空字符串
			inputEntry: "",
			// error属性：当用户提交非法数据时显示错误信息，同时避免状态变更
			error: false,
		};
	},
	computed: {
		titleOfActiveDay() {
			return store.getActiveDay().fullTitle;
		}
	},
	methods: {
		submitEvent(eventDetails) {
			if (eventDetails === '') return this.error = true;

			store.submitEvent(eventDetails);
			this.inputEntry = "";
			this.error = false;
		}
	},
};
</script>

<style lang="scss" scoped>
#calendar-entry {
	background: #FFF;
	border: 1px solid #42b883;
	border-radius: 10px;
	max-width: 300px;
	margin: 0 auto;
	padding: 20px;

	.calendar-entry-note {
		input {
			width: 200px;
			font-weight: 600;
			border: 0;
			border-bottom: 1px solid #CCC;
			font-size: 15px;
			height: 30px;
			margin-bottom: 10px;

			&:focus {
				outline: none;
			}
		}

		.calendar-entry-day {
			color: #42b883;
			font-size: 12px;
			margin-bottom: 10px;
			padding-bottom: 5px;

			.bold {
				font-weight: 600;
			}
		}

		.submit {
			display: block;
			margin: 0 auto;
		}
	}
}
</style>