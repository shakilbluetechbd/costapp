import {
  all, takeEvery, takeLatest, put, fork, call,
} from 'redux-saga/effects';
import costActions from './actions';
import services from '../services';
import { getErrorMessage, isEmptyObject } from '../../helpers/utility';

export function* getCosts() {
  yield takeLatest(costActions.GET_COSTS_REQUEST,
    function* (evt) {
      const action = costActions.getCosts;
      try {
        const resp = yield call(services.getCosts, evt.payload);
        if (resp.data) {
          yield put(action.success({ data: resp.data }));
        } else {
          yield put(action.failure(resp.errors));
        }
      } catch (ex) {
        yield put(action.failure([getErrorMessage(ex)]));
      }
    });
}

export function* getCost() {
  yield takeLatest(costActions.GET_COST_REQUEST,
    function* (evt) {
      const action = costActions.getCost;
      const { id } = evt.payload;
      try {
        const resp = yield call(services.getCost, id);
        if (resp.data) {
          yield put(action.success(resp.data));
        } else {
          yield put(action.failure(resp.errors));
        }
      } catch (ex) {
        yield put(action.failure([getErrorMessage(ex)]));
      }
    });
}


export function* createCost() {
  yield takeLatest(costActions.CREATE_COST_REQUEST,
    function* (evt) {
      const action = costActions.createCost;
      try {
        const resp = yield call(services.createCost, evt.payload);
        if (resp.data) {
          yield put(action.success(resp.result));
        } else {
          yield put(action.failure(resp.errors));
        }
      } catch (ex) {
        yield put(action.failure([getErrorMessage(ex)]));
      }
    });
}


export function* updateCost() {
  yield takeEvery(costActions.UPDATE_COST_REQUEST,
    function* (evt) {
      const action = costActions.updateCost;
      const { id, data } = evt.payload;
      try {
        const resp = yield call(services.updateCost, id, data);
        if ( resp.data) {
          yield put(action.success(resp.data));
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
    fork(getCosts),
    fork(getCost),
    fork(updateCost),
    fork(createCost),
  ]);
}
