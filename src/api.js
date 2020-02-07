import axios from 'axios';

function checkIfIsDevelopment() {
  console.log('checkIfIsDevelopment');
  return window.location.hostname === 'localhost';
}

function getBaseURL(isInDevelopmentMode) {
  console.log('isInDevelopmentMode', isInDevelopmentMode);

  if (isInDevelopmentMode) {
    console.log('isInDevelopmentMode: ', isInDevelopmentMode);
    return 'http://127.0.0.1:8000/api/v1/';
  }

  console.log('isInDevelopmentMode: ', isInDevelopmentMode);
  return 'https://api.neoguide.pl/api/v1/';
}

const isDevelopment = checkIfIsDevelopment();
const BASE_URL = getBaseURL(isDevelopment);

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export const neoGuideAPI = () => axios.create({ baseURL: BASE_URL });

export const PSALMS = 'psalms/';
export const PSALM_DETAIL = psalmID => `psalms/${psalmID}/`;
