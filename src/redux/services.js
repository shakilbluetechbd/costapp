import { methodTypes, call } from './api';
// import { getBaseUrl, prefixes } from '../config';

// const userService = 'http://costapibd.herokuapp.com';
const userService = 'http://127.0.0.1:8000';
// const productService = getBaseUrl(prefixes.ProductPrefix);
// const aaumUrl = getBaseUrl(ports.Aaum);
// const srBaseUrl = getBaseUrl(ports.SR);
// const userService = 'http://user.api-staging.aadi.xen.works/v1/auth/refresh';
// const productService = 'http://product.api-staging.aadi.xen.works/v1';

// const baseUrl = getBaseUrl();

export default {

  // Auth
  login: data => call(methodTypes.POST, `${userService}/oauth/token`, data, false),
  register: data => call(methodTypes.POST, `${userService}/api/user`, data, false),
  // // refreshToken: data => call(methodTypes.POST, `${userService}/auth/refresh`, data, false),
  // refreshToken: data => call(methodTypes.GET, `${userService}/auth/refresh`),
  // // sendOTP: data => call(methodTypes.GET, `${aaumUrl}/auth`, data),
  // getNewUsers: pgn => call(methodTypes.GET, `${userService}/users?${formatPgn(pgn)}`),
  // getNewUser: id => call(methodTypes.GET, `${userService}/users/${id}`),
  // createNewUser: data => call(methodTypes.POST, `${userService}/users`, data),
  // updateNewUser: (id, data) => call(methodTypes.PUT, `${userService}/users/${id}`, data),

  //cost
  getCosts: pgn => call(methodTypes.GET, `${userService}/api/costs?${formatPgn(pgn)}`),
  createCost: data => call(methodTypes.POST, `${userService}/api/costs`, data, true),
  getCost: id => call(methodTypes.GET, `${userService}/api/costs/${id}`,true),
  updateCost: (id, data) => call(methodTypes.PUT, `${userService}/api/costs/${id}`, data),

};

const formatPgn = pgn => (pgn ? `per_page=${pgn.pageSize}&page=${pgn.current}`:'');
