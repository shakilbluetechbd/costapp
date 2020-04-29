export default {
  get,
  set,
  remove,
  has,
  getObj,
  setObj,
};

export function remove(key) {
  try {
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}_expiresIn`);
  } catch (e) {
    return false;
  }
  return true;
}

export function get(key) {
  const now = Date.now();

  let expiresIn = localStorage.getItem(`${key}_expiresIn`);
  if (expiresIn === undefined || expiresIn === null) { expiresIn = 0; }

  if (expiresIn < now) {
    remove(key);
    return null;
  }
  try {
    const value = localStorage.getItem(key);
    return value;
  } catch (e) {
    return null;
  }
}

export function has(key) {
  return !!get(key);
}

export function set(key, value, expires) {
  if (expires === undefined || expires === null) {
    expires = 365 * 24 * 60 * 60;
  } else {
    expires = Math.abs(expires);
  }

  const now = Date.now();
  const schedule = now + expires * 1000;
  try {
    localStorage.setItem(key, value);
    localStorage.setItem(`${key}_expiresIn`, schedule);
  } catch (e) {
    return false;
  }
  return true;
}

export function getObj(key) {
  return JSON.parse(get(key));
}

export function setObj(key, value, expires) {
  return set(key, JSON.stringify(value), expires);
}
