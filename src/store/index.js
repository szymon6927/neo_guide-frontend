import Vue from 'vue';
import Vuex from 'vuex';

import { neoGuideAPI, PSALMS } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    psalms: [],
    psalmsSearchValue: '',
    psalmsSearchCardColorValue: '',
    psalmsSearchSortingValue: '',
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
    psalmsSearchValue(state) {
      return state.psalmsSearchValue;
    },
  },
  mutations: {
    SET_PSALMS(state, payload) {
      state.psalms = payload;
    },
    SET_PSALMS_SEARCH_VALUE(state, payload) {
      state.psalmsSearchValue = payload;
    },
    SET_PSALMS_SEARCH_CARD_COLOR_VALUE(state, payload) {
      state.psalmsSearchCardColorValue = payload;
    },
    SET_PSALMS_SEARCH_SORTING_VALUE(state, payload) {
      state.psalmsSearchSortingValue = payload;
    },
  },
  actions: {
    async getPsalms(context) {
      const response = await neoGuideAPI().get(PSALMS);
      console.log('response.data: ', response.data);
      context.commit('SET_PSALMS', response.data.results);
    },

    async getFilteredPsalms(context) {
      let url = `${PSALMS}?search=${this.state.psalmsSearchValue}`;

      if (this.state.psalmsSearchCardColorValue !== '') {
        url += `&card_color=${this.state.psalmsSearchCardColorValue}`;
      }

      if (this.state.psalmsSearchSortingValue !== '') {
        url += `&ordering=${this.state.psalmsSearchSortingValue}`;
      }

      const response = await neoGuideAPI().get(url);
      console.log('response.data: ', response.data);
      context.commit('SET_PSALMS', response.data.results);
    },
  },
  modules: {
  },
});
