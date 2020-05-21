import { methodTypes, call } from './api';
// import { getBaseUrl, prefixes } from '../config';

const userService = 'https://costapibd.herokuapp.com';
// const userService = 'http://127.0.0.1:8000';
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

  //income
  getIncomes: pgn => call(methodTypes.GET, `${userService}/api/incomes?${formatPgn(pgn)}`),
  createIncome: data => call(methodTypes.POST, `${userService}/api/incomes`, data, true),
  getIncome: id => call(methodTypes.GET, `${userService}/api/incomes/${id}`,true),
  updateIncome: (id, data) => call(methodTypes.PUT, `${userService}/api/incomes/${id}`, data),

  //assets
  getAssets: pgn => call(methodTypes.GET, `${userService}/api/assets?${formatPgn(pgn)}`),
  createAsset: data => call(methodTypes.POST, `${userService}/api/assets`, data, true),
  getAsset: id => call(methodTypes.GET, `${userService}/api/assets/${id}`,true),
  updateAsset: (id, data) => call(methodTypes.PUT, `${userService}/api/assets/${id}`, data),

  //loan
  getLoans: pgn => call(methodTypes.GET, `${userService}/api/loans?${formatPgn(pgn)}`),
  createLoan: data => call(methodTypes.POST, `${userService}/api/loans`, data, true),
  getLoan: id => call(methodTypes.GET, `${userService}/api/loans/${id}`,true),
  updateLoan: (id, data) => call(methodTypes.PUT, `${userService}/api/loans/${id}`, data),

};

const formatPgn = pgn => (pgn ? `per_page=${pgn.pageSize}&page=${pgn.current}`:'');
