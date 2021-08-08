import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		addShopCar: [],
		collect: 0,
		checked: true,
		price: 0,
		checkedAll: true,
	},
	mutations: {
		addShopCar(state, data) {
			state.addShopCar.push(data);
		},
		collect(state, data) {
			state.collect = data;
		},
		checked(state) {
			state.checked = !state.checked;
			state.checkedAll = true;
		},
		price(state, data) {
			state.price += parseInt(data);
		},
		checkedF(state) {
			state.checkedAll = false;
		},
		checkedT(state) {
			state.checkedAll = true;
		},
		priceReset(state) {
			state.price = 0;
		},
		checkedAllT(state) {
			state.checked = true;
		},
	},
	getters: {},
	actions: {},
	modules: {},
});
