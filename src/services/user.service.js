import { neoGuideAPI } from '../clients/api.client';
import { neoGuideAuthenticatedAPI } from '../clients/api.authenticated.client';
import { TokenService } from './token.service';

export default class UserService {
  static async login(email, password) {
    const url = 'token/';
    const data = { email, password };

    try {
      const response = await neoGuideAPI.post(url, data);

      TokenService.storeToken(response.data.access);
      TokenService.storeRefreshToken(response.data.refresh);

      return true;
    } catch (e) {
      console.error(`User Service - Error: ${e}`);
      return false;
    }
  }

  static logout() {
    TokenService.clear();
  }

  static async getUserData() {
    const url = 'users/me/';
    const header = TokenService.getAuthenticationHeader();

    try {
      const response = await neoGuideAuthenticatedAPI.get(url, header);
      return response.data;
    } catch (e) {
      console.error(`UserService.getUserInfo() - ${e}`);

      if (e.response.status === 401) {
        return null;
      }

      return {};
    }
  }

  static async saveUserData(userID, userData) {
    const url = `users/${userID}/`;
    const header = TokenService.getAuthenticationHeader();

    console.log('userID: ', userID);
    console.log('userData: ', userData);

    try {
      const response = await neoGuideAuthenticatedAPI.put(url, userData, header);
      return response.data;
    } catch (e) {
      console.error(`UserService.saveUserData() - ${e}`);

      if (e.response.status === 401) {
        return null;
      }

      return {};
    }
  }
}
