import Vue from 'vue';
import Vuex from 'vuex';

import { neoGuideAPI, PSALMS } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    psalms: [],
  },
  getters: {
    psalms(state) {
      return state.psalms;
    },
    psalm: state => (id) => {
      const psalm = state.psalms.filter(p => p.id === Number(id))[0];
      console.log('psalm: ', psalm);
      return psalm;
    },
  },
  mutations: {
    SET_PSALMS(state, payload) {
      state.psalms = payload;
    },
  },
  actions: {
    async getPsalms(context) {
      const response = await neoGuideAPI().get(PSALMS);
      console.log('response.data: ', response.data);
      context.commit('SET_PSALMS', response.data.results);
    },
  },
  modules: {
  },
});
