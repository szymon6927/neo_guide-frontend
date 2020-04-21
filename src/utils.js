export function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }

  return false;
}

export function getBaseURL() {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://127.0.0.1:8000/api/v1/';
  }

  return 'https://api.neoguide.pl/api/v1/';
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
