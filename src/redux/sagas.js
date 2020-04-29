import { all } from 'redux-saga/effects';
import practiceSagas from './practice/saga';
import authSagas from './auth/saga';
export default function* rootSaga() {
  yield all([
    practiceSagas(),
    authSagas(),
  ]);
}
