import axios from 'axios';

import { Promise } from 'es6-promise';
import { TokenService } from '../services/token.service';
import { getBaseURL } from '../utils';


const BASE_URL = getBaseURL();

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export const neoGuideAuthenticatedAPI = axios.create({ baseURL: BASE_URL });

neoGuideAuthenticatedAPI.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // Pass all non 401s back to the caller.
  if (error.response.status !== 401) {
    return Promise.reject(error);
  }

  if (error.config.url.includes('token/refresh/')) {
    console.error('Error with token.');
    TokenService.clear();

    return Promise.reject(error);
  }

  return TokenService.getNewToken()
    .then((token) => {
      // New request with new token
      const originalRequest = error.config;
      originalRequest.headers.Authorization = `Bearer ${token}`;

      return new Promise((resolve, reject) => {
        axios.request(originalRequest).then((response) => {
          resolve(response);
        }).catch((err) => {
          reject(err);
        });
      });
    })
    .catch((err) => {
      console.error('Error while trying to fetch new token.');
      TokenService.clear();
      return Promise.reject(err);
    });
});
