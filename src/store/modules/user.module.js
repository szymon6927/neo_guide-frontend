import UserService from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { LOGIN_LITERALS } from '../../literals/auth';

export const userModule = {
  namespaced: true,

  state: {
    isLoggedIn: TokenService.isAuthenticated(),
  },

  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },

  mutations: {
    SET_IS_LOGGED_IN(state, payload) {
      state.isLoggedIn = payload;
    },
  },

  actions: {
    async login({ dispatch, commit }, { email, password }) {
      const result = await UserService.login(email, password);

      if (!result) {
        dispatch('alertModule/error', LOGIN_LITERALS.LOGIN_ERROR, { root: true });
      }

      commit('SET_IS_LOGGED_IN', result);
    },

    logout({ commit }) {
      UserService.logout();
      commit('SET_IS_LOGGED_IN', false);
    },
  },
};
