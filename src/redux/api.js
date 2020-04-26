// import qs from 'querystrings';
// import { consoleLog, isEmptyObject } from '../helpers/utility';
// import authHelpers from '../helpers/auth';

// export const methodTypes = {
//   POST: 'POST',
//   GET: 'GET',
//   PUT: 'PUT',
//   DELETE: 'DELETE',
// };

// const headers = {
//   'Content-Type': 'application/json',
// };

// export const call = (methodType, url, data = {}, requireAuth = true) => {
//   if (requireAuth && !authHelpers.isLoggedIn()) {
//     throw 'Login required!';
//   }

//   if (requireAuth && authHelpers.isLoggedIn()) {
//     headers.Authorization = `Bearer ${authHelpers.getToken()}`;
//   }

//   const options = {
//     method: methodType,
//     headers,
//   };

//   if (!isEmptyObject(data)) {
//     if (methodType === methodTypes.GET) {
//       url = `${url}?${qs.stringify(data)}`;
//     } else {
//       options.body = JSON.stringify(data);
//     }
//   }

//   consoleLog(methodType, url, 'Options', options);

//   return new Promise((resolve, reject) => fetch(url, options)
//     .then(response => response.json())
//     .then(response => resolve(response))
//     .catch(error => reject(error)));
// };

// export const uploadFile = (url, fileType, file) => {

//   const options = {
//     body: file,
//     method: 'PUT',
//     headers: {
//       'Content-Type': fileType,
//     }
//   };
//   return new Promise((resolve, reject) => {
//     return fetch(url, options)
//       .then(response => response.text())
//       .then(response => resolve(response))
//       .catch(error => reject(error));
//   });
// }

// export const get = (url, data) => {
//   if (authHelpers.isLoggedIn()) {
//     headers.Authorization = 'Bearer ' + authHelpers.getToken();
//   }

//   const options = {
//     method: methodTypes.GET,
//     headers: headers
//   };

//   consoleLog('GET', url, "Options", options);

//   const url_params = data ? `${url}?${qs.stringify(data)}` : url;

//   return new Promise((resolve, reject) => {
//     return fetch(url, options)
//       .then(response => response.json())
//       .then(response => resolve(response))
//       .catch(error => reject(error));
//   });
// };

// export const post = (url, data = {}) => {
//   if (authHelpers.isLoggedIn()) {
//     headers.Authorization = 'Bearer ' + authHelpers.getToken();
//   }

//   const options = {
//     body: JSON.stringify(data),
//     method: methodTypes.POST,
//     headers: headers
//   };

//   consoleLog('POST', url, "Options", options);

//   return new Promise((resolve, reject) => {
//     return fetch(url, options)
//       .then(response => response.json())
//       .then(response => resolve(response))
//       .catch(error => reject(error));
//   });
// };