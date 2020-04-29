/* eslint-disable no-console */
import {
  all, takeEvery, takeLatest, put, fork, call, delay,
} from 'redux-saga/effects';
import {
  getToken, clearToken, decodeToken, setToken,
} from '../../helpers/auth';
import authActions from './actions';
import services from '../services';
import { getErrorMessage, isEmptyObject } from '../../helpers/utility';

export function* loginRequest() {
  yield takeEvery(authActions.LOGIN_REQUEST,
    function* (evt) {
      const action = authActions.login;
      try {
        const resp = yield call(services.login, evt.payload);
        // const resp = yield call((data) => data, "shakil is a good boy");
        if (!resp.error && resp.access_token) {
          const { access_token } = resp;
          const profile = decodeToken(access_token);
          yield put(action.success(access_token, profile));
        } else {
          yield put(action.failure(resp.error));
        }
      } catch (ex) {
        yield put(action.failure([getErrorMessage(ex)]));
      }
    });
}

// export function* loginSuccess() {
//   yield takeLatest(authActions.LOGIN_SUCCESS, function* (payload) {
//     yield call(setToken, payload.token);

//     yield delay(270000);

//     yield put(authActions.refreshToken.request());
//   });
// }

// export function* loginFailure() {
//   yield takeEvery(authActions.LOGIN_FAILURE, function* () {
//     yield call(clearToken);
//     yield put(authActions.logout.request());
//   });
// }

// export function* logout() {
//   yield takeEvery(authActions.LOGOUT, function* () {
//     yield call(clearToken);
//   });
// }

// export function* checkAuthorization() {
//   yield takeLatest(authActions.CHECK_AUTHORIZATION,
//     function* () {
//       const token = getToken();
//       if (token) {
//         const now = new Date().getTime() / 1000;
//         const profile = yield call(decodeToken, token);
//         console.log('Token Found. Will expire in ', profile.exp - now);

//         if (profile.exp - now <= 270) {
//           console.log('Refreshing...');

//           yield put(authActions.refreshToken.request());
//         } else {
//           console.log('No need to refresh...');

//           yield put(authActions.login.success(token, profile));
//         }
//       } else {
//         // No token found
//         console.log('No token Found. Login out....');
//         yield put(authActions.logout.request());
//       }
//     });
// }

// export function* refreshToken() {
//   yield takeEvery(authActions.REFRESH_TOKEN_REQUEST,
//     function* () {
//       const action = authActions.refreshToken;
//       const token = yield call(getToken);

//       try {
//         const resp = yield call(services.refreshToken, { token });
//         if (isEmptyObject(resp.errors) && resp.result) {
//           const { token } = resp.result;
//           const profile = decodeToken(token);
//           yield put(action.success(token, profile));
//         } else {
//           yield put(action.failure(resp.errors));
//         }
//       } catch (ex) {
//         yield put(action.failure([getErrorMessage(ex)]));
//       }
//     });
// }

// export function* refreshTokenSuccess() {
//   yield takeLatest(authActions.REFRESH_TOKEN_SUCCESS, function* (payload) {
//     yield call(setToken, payload.token);

//     yield delay(270000);

//     yield put(authActions.refreshToken.request());
//   });
// }

// export function* refreshTokenFailure() {
//   yield takeLatest(authActions.REFRESH_TOKEN_FAILURE, function* () {
//     yield call(yield clearToken);
//   });
// }

// export function* lockApp() {
//   yield takeLatest(authActions.LOCK_APP_REQUEST, function* () {
//     yield put(authActions.lockApp.success());
//   });
// }

// export function* sendOtp() {
//   yield takeLatest(authActions.SEND_OTP_REQUEST,
//     function* (evt) {
//       const action = authActions.sendOtp;
//       try {
//         const resp = yield call(services.sendOtp, evt.payload);
//         if (!resp.errors && resp.message === 'OTP_GENERATED') {
//           yield put(action.success(resp.result));
//         } else {
//           yield put(action.failure(resp.errors));
//         }
//       } catch (ex) {
//         yield put(action.failure([getErrorMessage(ex)]));
//       }
//     });
// }

export default function* rootSaga() {
  yield all([
    // fork(checkAuthorization),
    fork(loginRequest),
    // fork(loginSuccess),
    // fork(loginFailure),
    // fork(logout),
    //   fork(sendOtp),
    //   fork(refreshToken),
    //   fork(refreshTokenSuccess),
    //   fork(refreshTokenFailure),
    //   fork(lockApp),
  ]);
}
