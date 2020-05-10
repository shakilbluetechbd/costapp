const actions = {
  // CHECK_AUTHORIZATION  : 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST        : 'LOGIN_REQUEST',
  LOGIN_SUCCESS        : 'LOGIN_SUCCESS',
  LOGIN_FAILURE        : 'LOGIN_FAILURE',

  REGISTER_REQUEST        : 'REGISTER_REQUEST',
  REGISTER_SUCCESS        : 'REGISTER_SUCCESS',
  REGISTER_FAILURE        : 'REGISTER_FAILURE',
  // SEND_OTP_REQUEST     : 'SEND_OTP_REQUEST',
  // SEND_OTP_SUCCESS     : 'SEND_OTP_SUCCESS',
  // SEND_OTP_FAILURE     : 'SEND_OTP_FAILURE',
  // REFRESH_TOKEN_REQUEST: 'REFRESH_TOKEN_REQUEST',
  // REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS',
  // REFRESH_TOKEN_FAILURE: 'REFRESH_TOKEN_FAILURE',
  // LOGOUT               : 'LOGOUT',
  // LOCK_APP_REQUEST     : 'LOCK_APP_REQUEST',
  // LOCK_APP_SUCCESS     : 'LOCK_APP_SUCCESS',
  // UNLOCK_APP_REQUEST   : 'UNLOCK_APP_REQUEST',
  // UNLOCK_APP_SUCCESS   : 'UNLOCK_APP_SUCCESS',
  // UNLOCK_APP_FAILURE   : 'UNLOCK_APP_FAILURE',

  // checkAuthorization: {
  //   request: ()               => ({ type: actions.CHECK_AUTHORIZATION })
  // },
  login: {
    request: (data)           => ({ type: actions.LOGIN_REQUEST, payload: data }),
    success: (token, profile) => ({ type: actions.LOGIN_SUCCESS, token: token, profile: profile }),
    failure: (errs)           => ({ type: actions.LOGIN_FAILURE, errors: errs })
  },

  register: {
    request: (data)           => ({ type: actions.REGISTER_REQUEST, payload: data }),
    success: (data)           => ({ type: actions.REGISTER_SUCCESS, data: data }),
    failure: (errs)           => ({ type: actions.REGISTER_FAILURE, errors: errs })
  },
  // lockApp: {
  //   request: ()               => ({ type: actions.LOCK_APP_REQUEST }),
  //   success: ()               => ({ type: actions.LOCK_APP_SUCCESS }),
  // },
  // unlockApp: {
  //   request: ()               => ({ type: actions.UNLOCK_APP_REQUEST }),
  //   success: (token, profile) => ({ type: actions.UNLOCK_APP_SUCCESS, token: token, profile: profile }),
  //   failure: (errs)           => ({ type: actions.UNLOCK_APP_FAILURE, errors: errs })
  // },
  // logout: {
  //   request: ()               => ({ type: actions.LOGOUT }),
  // },
  // sendOtp: {
  //   request: (data)           => ({ type: actions.SEND_OTP_REQUEST, payload: data }),
  //   success: ()               => ({ type: actions.SEND_OTP_SUCCESS }),
  //   failure: (errs)           => ({ type: actions.SEND_OTP_FAILURE, errors: errs }),
  // },
  // refreshToken: {
  //   request: ()               => ({ type: actions.REFRESH_TOKEN_REQUEST }),
  //   success: (token, profile) => ({ type: actions.REFRESH_TOKEN_SUCCESS, token: token, profile: profile }),
  //   failure: (errs)           => ({ type: actions.REFRESH_TOKEN_FAILURE, errors: errs })
  // }
};
export default actions;
