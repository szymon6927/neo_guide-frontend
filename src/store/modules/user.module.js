import UserService from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { LOGIN_LITERALS, CHANGE_PASSWORD_LITERALS } from '../../literals/auth';
import { PROFILE_LITERALS } from '../../literals/profile';
import { isEmptyObject } from '../../utils';

export const userModule = {
  namespaced: true,

  state: {
    isLoggedIn: TokenService.isAuthenticated(),
    user: {},
  },

  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },

    user(state) {
      return state.user;
    },
  },

  mutations: {
    SET_IS_LOGGED_IN(state, payload) {
      state.isLoggedIn = payload;
    },

    SET_USER(state, payload) {
      state.user = payload;
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

    async getUser({ dispatch, commit }) {
      const result = await UserService.getUserData();

      if (result === null) {
        dispatch('userModule/logout', null, { root: true });
        return;
      }

      if (isEmptyObject(result)) {
        dispatch('alertModule/error', PROFILE_LITERALS.PROFILE_ERROR, { root: true });
        return;
      }

      commit('SET_USER', result);
    },

    async updateUserData({ dispatch, commit }, { userID, userData }) {
      const result = await UserService.saveUserData(userID, userData);

      if (result === null) {
        dispatch('userModule/logout', null, { root: true });
        return;
      }

      if (isEmptyObject(result)) {
        dispatch('alertModule/error', PROFILE_LITERALS.UPDATE_ERROR, { root: true });
        return;
      }

      commit('SET_USER', result);
      dispatch('alertModule/success', PROFILE_LITERALS.UPDATE_SUCCESS, { root: true });
    },

    async changePassword({ dispatch }, { changePasswordRequest }) {
      console.log('changePasswordRequest: ', changePasswordRequest);

      const result = await UserService.changePassword(changePasswordRequest);

      if (isEmptyObject(result)) {
        dispatch(
          'alertModule/error',
          CHANGE_PASSWORD_LITERALS.ERROR,
          { root: true },
        );
        return;
      }

      dispatch('alertModule/success', CHANGE_PASSWORD_LITERALS.SUCCESS, { root: true });

      setTimeout(() => {
        dispatch('userModule/logout', null, { root: true });
      }, 2500);
    },
  },
};
