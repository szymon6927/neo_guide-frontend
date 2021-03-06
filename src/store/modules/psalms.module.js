import PsalmsService from '../../services/psalms.service';

export const psalmsModule = {
  namespaced: true,

  state: {
    psalms: [],
    psalm: {},
  },

  getters: {
    psalms(state) {
      return state.psalms;
    },

    psalm(state) {
      return state.psalms;
    },
  },

  mutations: {
    SET_PSALMS(state, payload) {
      state.psalms = payload;
    },

    SET_PSALM(state, payload) {
      state.psalm = payload;
    },
  },

  actions: {
    async getAllPsalms({ dispatch, commit }) {
      dispatch('loading', true, { root: true });

      const allPsalms = await PsalmsService.getAllPsalms();
      commit('SET_PSALMS', allPsalms);

      if (allPsalms === null) {
        dispatch('userModule/logout', null, { root: true });
      }

      dispatch('loading', false, { root: true });
    },

    async getSinglePsalm({ dispatch, commit }, psalmID) {
      // const psalm = state.psalms.filter(p => p.id === Number(id))[0];
      dispatch('loading', true, { root: true });

      const psalm = await PsalmsService.getPsalm(psalmID);
      commit('SET_PSALM', psalm);

      if (psalm === null) {
        dispatch('userModule/logout', null, { root: true });
      }

      dispatch('loading', false, { root: true });
    },

    async getFilteredPsalms({ dispatch, commit }, filterValues) {
      dispatch('loading', true, { root: true });

      const filteredPsalms = await PsalmsService.getFilteredPsalms(filterValues);
      commit('SET_PSALMS', filteredPsalms);

      if (filteredPsalms === null) {
        dispatch('userModule/logout', null, { root: true });
      }

      dispatch('loading', false, { root: true });
    },
  },
};
