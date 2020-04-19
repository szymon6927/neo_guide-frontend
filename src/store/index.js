import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import { alertModule } from './modules/alert.module';
import { psalmsModule } from './modules/psalms.module';
import { userModule } from './modules/user.module';

import { isMobile } from '../utils';

const vuexPersist = new VuexPersist({
  key: 'neoguide-app',
  storage: window.localStorage,
  reducer: state => ({
    psalms: state.psalmsModule.psalms,
    psalm: state.psalmsModule.psalm,
    isLoggedIn: state.userModule.isLoggedIn,
    users: state.userModule.user,
  }),
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    loading: false,
    hideMenu: isMobile(),
    isMobile: isMobile(),
    isCollapse: false,
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    hideMenu(state) {
      return state.hideMenu;
    },
    isMobile(state) {
      return state.isMobile;
    },
    isCollapse(state) {
      return state.isCollapse;
    },
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_HIDE_MENU(state, payload) {
      state.hideMenu = payload;
    },
    SET_IS_MOBILE(state, payload) {
      state.isMobile = payload;
    },
    SET_IS_COLLAPSE(state, payload) {
      state.isCollapse = payload;
    },
  },
  actions: {
    loading(context, payload) {
      context.commit('SET_LOADING', payload);
    },

    hideMenu(context, payload) {
      context.commit('SET_HIDE_MENU', payload);
    },

    isMobile(context, payload) {
      context.commit('SET_IS_MOBILE', payload);
    },

    isCollapse(context, payload) {
      context.commit('SET_IS_COLLAPSE', payload);
    },
  },
  modules: {
    userModule,
    alertModule,
    psalmsModule,
  },
});
