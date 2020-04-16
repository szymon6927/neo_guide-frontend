import { neoGuideAPI } from '../clients/api.client';
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
}
