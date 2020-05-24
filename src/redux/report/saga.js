import {
  all, takeEvery, takeLatest, put, fork, call,
} from 'redux-saga/effects';
import reportActions from './actions';
import services from '../services';
import { getErrorMessage } from '../../helpers/utility';

export function* getReport() {
  yield takeLatest(reportActions.GET_REPORT_REQUEST,
    function* (evt) {
      const action = reportActions.getReport;
      // const { payload, link, pgn } = this.state
      try {
        const resp = yield call(services.getReport, evt.evt);
        if (resp.success) {
          yield put(action.success({ data: resp.result }));
        } else {
          yield put(action.failure(resp.errors));
        }
      } catch (ex) {
        yield put(action.failure([getErrorMessage(ex)]));
      }
    });
}

export function* getSearch() {
  yield takeLatest(reportActions.GET_SEARCH_REQUEST,
    function* (evt) {
      const action = reportActions.getSearch;
      // const { payload, link, pgn } = this.state
      try {
        const resp = yield call(services.getSearch, evt.evt);
        if (resp.success) {
          yield put(action.success({ data: resp.result }));
        } else {
          yield put(action.failure(resp.errors));
        }
      } catch (ex) {
        yield put(action.failure([getErrorMessage(ex)]));
      }
    });
}

export default function* rootSaga() {
  yield all([
    fork(getReport),
    fork(getSearch),
  ]);
}
