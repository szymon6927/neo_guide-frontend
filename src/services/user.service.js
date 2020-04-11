import { neoGuideAPI } from '../api';

export default class UserService {
  static async login(email, password) {
    const url = 'token/';
    const data = { email, password };

    try {
      const response = await neoGuideAPI().post(url, data);

      localStorage.setItem('userToken', response.data.access);
      return true;
    } catch (e) {
      console.error(`Error: ${e}`);
      return false;
    }
  }

  static logout() {
    localStorage.removeItem('userToken');
  }
}
