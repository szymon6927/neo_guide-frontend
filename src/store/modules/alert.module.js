export const alertModule = {
  namespaced: true,

  state: {
    type: null,
    message: null,
  },

  getters: {
  },

  mutations: {
    SUCCESS(state, message) {
      state.type = 'success';
      state.message = message;
    },
    INFO(state, message) {
      state.type = 'info';
      state.message = message;
    },
    WARNING(state, message) {
      state.type = 'warning';
      state.message = message;
    },
    ERROR(state, message) {
      state.type = 'error';
      state.message = message;
    },
    CLEAR(state) {
      state.type = null;
      state.message = null;
    },
  },

  actions: {
    success({ commit }, message) {
      commit('SUCCESS', message);
    },
    info({ commit }, message) {
      commit('INFO', message);
    },
    warning({ commit }, message) {
      commit('WARNING', message);
    },
    error({ commit }, message) {
      commit('ERROR', message);
    },
    clear({ commit }) {
      commit('CLEAR');
    },
  },
};
