import axios from 'axios';

const isDevelopment = window.location.hostname === 'neoguide.pl'
  || window.location.hostname === 'localhost';
const BASE_URL = isDevelopment
  ? 'http://127.0.0.1:8000/api/v1/'
  : 'https://api.neoguide.pl/api/v1/';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export const neoGuideAPI = () => axios.create({ baseURL: BASE_URL });

export const PSALMS = 'psalms/';
export const PSALM_DETAIL = psalmID => `psalms/${psalmID}/`;
