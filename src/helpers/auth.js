import decode from 'jwt-decode';
import storage from './storage';

const ID_TOKEN_KEY = 'id_token_CostApp';

export default {
  isLoggedIn,
  isTokenExpired,
  setToken,
  clearToken,
  getToken,
  getProfile,
  decodeToken,
};

export function isLoggedIn() {
  const token = getToken();
  return token && !isTokenExpired(token);
}

export function isTokenExpired(token) {

  if (!token) {
    return true;
  }
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
      return true;
    }

    return false;
  } catch (err) {
    return true;
  }
}

export function setToken(idToken) {
  storage.setObj(ID_TOKEN_KEY, idToken);
}

export function clearToken() {
  storage.remove(ID_TOKEN_KEY);
}

export function getToken() {
  try {
    const idToken = storage.getObj(ID_TOKEN_KEY);
    return idToken;
  } catch (err) {
    clearToken();
    return null;
  }
}

export function getProfile() {
  const token = getToken();
  if (token) {
    try {
      return decode(token);
    } catch (err) {
      clearToken();
      return null;
    }
  }
  return null;
}

export function decodeToken(token) {
  return decode(token);
}
