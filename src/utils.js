export function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }

  return false;
}

export function hasToken() {
  const token = localStorage.getItem('userToken');

  return token !== null;
}
