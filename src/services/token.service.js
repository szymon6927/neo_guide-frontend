import { neoGuideAPI } from '../clients/api.client';


export class TokenService {
  static LOCAL_STORAGE_TOKEN = 'userToken';

  static LOCAL_STORAGE_REFRESH_TOKEN = 'userRefreshToken';

  static isAuthenticated() {
    return this.getToken() !== null;
  }

  static getAuthenticationHeader() {
    return {
      headers: { Authorization: `Bearer ${this.getToken()}` },
    };
  }

  static getNewToken() {
    const url = 'token/refresh/';
    const data = {
      refresh: this.getRefreshToken(),
    };

    return new Promise((resolve, reject) => {
      neoGuideAPI.post(url, data)
        .then((response) => {
          this.storeToken(response.data.access);
          resolve(response.data.access);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static storeToken(token) {
    localStorage.setItem(TokenService.LOCAL_STORAGE_TOKEN, token);
  }

  static storeRefreshToken(refreshToken) {
    localStorage.setItem(TokenService.LOCAL_STORAGE_REFRESH_TOKEN, refreshToken);
  }

  static clear() {
    localStorage.removeItem(TokenService.LOCAL_STORAGE_TOKEN);
    localStorage.removeItem(TokenService.LOCAL_STORAGE_REFRESH_TOKEN);
  }

  static getRefreshToken() {
    return localStorage.getItem(TokenService.LOCAL_STORAGE_REFRESH_TOKEN);
  }

  static getToken() {
    return localStorage.getItem(TokenService.LOCAL_STORAGE_TOKEN);
  }
}
