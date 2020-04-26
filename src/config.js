// export const apiVersion = 'v1';
// export const appVersion = '0.0.0';

// export const url = 'https://blue.com';
// export const apiUrl = 'https://api.blue.com';

// export const stagingUrl = 'https://accounts.bluetechbd.com';
// export const apiStagingUrl = 'https://api1.bdtickets.tech';

// export const localUrl = 'http://localhost:3000';
// export const apiLocalUrl = 'http://localhost:8001/api';

// const useLocal = false;

// // export const getBaseUrl = port => `${isProductionEnv() ? apiUrl : apiStagingUrl}:${port}/${apiVersion}`;

// const scheme = `https://`;
// const stagingBaseUrl = `api-staging.aadi.xen.works`;

// export const getBaseUrl = prefix => `${scheme}${prefix}${stagingBaseUrl}/${apiVersion}`;

// export const environments = {
//   PRODUCTION: 'PRODUCTION',
//   STAGING: 'STAGING',
//   DEVELOPMENT: 'DEVELOPMENT',
//   LOCAL: 'LOCAL',
// };

// export const ports = {
//   Aaum: '20100',
//   Notifier: '20101',
//   Booking: '20102',
//   Helpdesk: '20103',
//   Payment: '20104',
//   Accounts: '20105',
//   Tenant: '20107',
//   Air: '20109',
//   Launch: '20110',
//   SR: '20120',
// };

// export const prefixes = {
//   UserPrefix : 'user.',
//   OrderPrefix : 'order.',
//   ProductPrefix : 'product.',
// }

// export const environment = () => {
//   const hostname = window && window.location && window.location.hostname;

//   switch (hostname) {
//     case url:
//       return environments.PRODUCTION;
//     case stagingUrl:
//       return environments.STAGING;
//     case localUrl:
//       return environments.STAGING;
//     default:
//       return environments.DEVELOPMENT;
//   }
// };

// export const isStagingEnv = () => environment === environments.STAGING;
// export const isProductionEnv = () => environment === environments.PRODUCTION;
// export const isLocalEnv = () => environment === environments.DEVELOPMENT;
