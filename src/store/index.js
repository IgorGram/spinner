import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoading: true,
		data: null
	},
	mutations: {
		SET_LOADING (state, loading) {
			state.isLoading = loading;
		},
		SET_DATA (state, data) {
			state.data = data;
		}
	},
	actions: {
		fetchUser: async ({ commit }) => {
			try {
				const response = await fetch('https://raw.githubusercontent.com/netology-code/react-task/master/netology.json');
				const data = await response.json();
				commit('SET_DATA', data.data);
				commit('SET_LOADING', false);
			} catch (e) {
				commit('SET_LOADING', true)
			}
		},
	}
})
