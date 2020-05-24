import { all } from 'redux-saga/effects';
import practiceSagas from './practice/saga';
import authSagas from './auth/saga';
import costSagas from './cost/saga';
import assetSagas from './asset/saga';
import loanSagas from './loan/saga';
import incomeSagas from './income/saga';
import reportSagas from './report/saga';
export default function* rootSaga() {
  yield all([
    practiceSagas(),
    authSagas(),
    costSagas(),
    assetSagas(),
    loanSagas(),
    incomeSagas(),
    reportSagas(),
  ]);
}
