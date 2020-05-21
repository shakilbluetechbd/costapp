import {
  all, takeEvery, takeLatest, put, fork, call,
} from 'redux-saga/effects';
import incomeActions from './actions';
import services from '../services';
import { getErrorMessage, isEmptyObject } from '../../helpers/utility';

export function* getIncomes() {
  yield takeLatest(incomeActions.GET_INCOMES_REQUEST,
    function* (evt) {
      const action = incomeActions.getIncomes;
      try {
        const resp = yield call(services.getIncomes, evt.payload);
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

export function* getIncome() {
  yield takeLatest(incomeActions.GET_INCOME_REQUEST,
    function* (evt) {
      const action = incomeActions.getIncome;
      const { id } = evt.payload;
      try {
        const resp = yield call(services.getIncome, id);
        if (resp.success) {
          yield put(action.success(resp.result));
        } else {
          yield put(action.failure(resp.errors));
        }
      } catch (ex) {
        yield put(action.failure([getErrorMessage(ex)]));
      }
    });
}


export function* createIncome() {
  yield takeLatest(incomeActions.CREATE_INCOME_REQUEST,
    function* (evt) {
      const action = incomeActions.createIncome;
      try {
        const resp = yield call(services.createIncome, evt.payload);
        if (resp.success) {
          yield put(action.success(resp.result));
        } else {
          yield put(action.failure(resp.errors));
        }
      } catch (ex) {
        yield put(action.failure([getErrorMessage(ex)]));
      }
    });
}


export function* updateIncome() {
  yield takeEvery(incomeActions.UPDATE_INCOME_REQUEST,
    function* (evt) {
      const action = incomeActions.updateIncome;
      const { id, data } = evt.payload;
      try {
        const resp = yield call(services.updateIncome, id, data);
        if (resp.success) {
          yield put(action.success(resp.result));
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
    fork(getIncomes),
    fork(getIncome),
    fork(updateIncome),
    fork(createIncome),
  ]);
}
