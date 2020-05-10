import actions from './actions';

const initState = { idToken: null, isLoggingIn: false, isLoggedIn: false, isLocked: false };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        errors: null
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        idToken: action.token,
        profile: action.profile,
        isLoggingIn: false,
        isLoggedIn: true,
        errors: null
      };
    case actions.LOGIN_FAILURE:
      return {
        ...initState,
        idToken: null,
        errors: action.errors,
        isLoggedIn: false,
        isLoggingIn: false
      };

    case actions.REGISTER_REQUEST:
      return {
        ...state,
        isRegistering: true,
        isRegistered: false,
        errors: null
      };
    case actions.REGISTER_SUCCESS:
      
      return {
        ...state,
        profile: action.data,
        isRegistering: false,
        isRegistered: true,
        errors: null
      };
    case actions.REGISTER_FAILURE:
      return {
        ...initState,
       
        errors: action.errors,
        isRegistering: false,
        isRegistered: false
      };
    // case actions.REFRESH_TOKEN_REQUEST:
    //   return {
    //     ...state
    //   };
    // case actions.REFRESH_TOKEN_SUCCESS:
    //   return {
    //     ...state,
    //     idToken: action.token,
    //     profile: action.profile,
    //     isLoggingIn: false,
    //     isLoggedIn: true,
    //     errors: null
    //   };
    // case actions.REFRESH_TOKEN_FAILURE:
    //   return {
    //     ...state,
    //     idToken: null,
    //     isLoggedIn: false,
    //     errors: action.errors
    //   };
    // case actions.SEND_OTP_REQUEST:
    //   return {
    //     ...state,
    //     otpData: action.payload,
    //     isLoading: true
    //   };
    // case actions.SEND_OTP_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     otpSent: true
    //   };
    // case actions.SEND_OTP_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     errors: action.errors
    //   };
    // case actions.LOCK_APP_REQUEST:
    //   return {
    //     ...state,
    //     isLocking: true
    //   }
    // case actions.LOCK_APP_SUCCESS:
    //   return {
    //     ...state,
    //     isLocking: false,
    //     isLocked: true
    //   }
    // case actions.UNLOCK_APP_REQUEST:
    //   return {
    //     ...state,
    //     isUnlocking: true
    //   }
    // case actions.UNLOCK_APP_SUCCESS:
    //   return {
    //     ...state,
    //     isUnlocking: false,
    //     idToken: action.token,
    //     profile: action.profile,
    //     isLoggedIn: true,
    //     errors: null
    //   }
    // case actions.UNLOCK_APP_FAILURE:
    //   return {
    //     ...state,
    //     idToken: null,
    //     isUnlocking: false,
    //     errors: action.errors
    //   };
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
