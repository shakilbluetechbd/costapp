import {
  all, takeEvery, takeLatest, put, fork, call,
} from 'redux-saga/effects';
import apparelActions from './actions';
// import services from '../services';
// import { getErrorMessage, isEmptyObject } from '../../helpers/utility';


export function* getApparels() {
  yield takeLatest(apparelActions.GET_APPARELS_REQUEST,
    function* (evt) {
      const action = apparelActions.getApparels;
      try {
        // const resp = yield call(services.getApparels, evt.payload);
        const resp = yield call((data) => data, "shakil is a good boy");
        if (resp) {
          yield put(action.success({ data: resp }));
        } else {
          yield put(action.failure(resp.errors));
        }
      } catch (ex) {
        yield put(action.failure());
      }
    });
}


export default function* rootSaga() {
  yield all([
    fork(getApparels),
  ]);
}
