import { all } from 'redux-saga/effects';
import practiceSagas from './practice/saga';
import authSagas from './auth/saga';
import costSagas from './cost/saga';
export default function* rootSaga() {
  yield all([
    practiceSagas(),
    authSagas(),
    costSagas(),
  ]);
}
