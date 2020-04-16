import axios from 'axios';

import { getBaseURL } from '../utils';

const BASE_URL = getBaseURL();

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export const neoGuideAPI = axios.create({ baseURL: BASE_URL });
