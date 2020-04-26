import { all } from 'redux-saga/effects';
import practiceSagas from './practice/saga';
export default function* rootSaga() {
  yield all([
    practiceSagas(),
  ]);
}
