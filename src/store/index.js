import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import { neoGuideAPI, PSALMS } from '@/api';

const vuexPersist = new VuexPersist({
  key: 'neoguide-app',
  storage: window.localStorage,
  reducer: state => ({
    psalms: state.psalms,
  }),
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    psalms: [],
    psalmsSearchValue: '',
    psalmsSearchCardColorValue: '',
    psalmsSearchSortingValue: '',
    loading: false,
  },
  getters: {
    psalms(state) {
      return state.psalms;
    },
    psalm: state => (id) => {
      const psalm = state.psalms.filter(p => p.id === Number(id))[0];
      return psalm;
    },
    psalmsSearchValue(state) {
      return state.psalmsSearchValue;
    },
    loading(state) {
      return state.loading;
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
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async getPsalms(context) {
      context.commit('SET_LOADING', true);

      const response = await neoGuideAPI().get(PSALMS);
      context.commit('SET_PSALMS', response.data.results);
      context.commit('SET_LOADING', false);
    },

    async getFilteredPsalms(context) {
      context.commit('SET_LOADING', true);

      let url = `${PSALMS}?search=${this.state.psalmsSearchValue}`;

      if (this.state.psalmsSearchCardColorValue !== '') {
        url += `&card_color=${this.state.psalmsSearchCardColorValue}`;
      }

      if (this.state.psalmsSearchSortingValue !== '') {
        url += `&ordering=${this.state.psalmsSearchSortingValue}`;
      }

      const response = await neoGuideAPI().get(url);
      context.commit('SET_PSALMS', response.data.results);
      context.commit('SET_LOADING', false);
    },

    loading(context, payload) {
      context.commit('SET_LOADING', payload);
    },
  },
  modules: {
  },
});
