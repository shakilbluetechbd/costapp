import {
  all, takeEvery, takeLatest, put, fork, call,
} from 'redux-saga/effects';
import loanActions from './actions';
import services from '../services';
import { getErrorMessage, isEmptyObject } from '../../helpers/utility';

export function* getLoans() {
  yield takeLatest(loanActions.GET_LOANS_REQUEST,
    function* (evt) {
      const action = loanActions.getLoans;
      try {
        const resp = yield call(services.getLoans, evt.payload);
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

export function* getLoan() {
  yield takeLatest(loanActions.GET_LOAN_REQUEST,
    function* (evt) {
      const action = loanActions.getLoan;
      const { id } = evt.payload;
      try {
        const resp = yield call(services.getLoan, id);
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


export function* createLoan() {
  yield takeLatest(loanActions.CREATE_LOAN_REQUEST,
    function* (evt) {
      const action = loanActions.createLoan;
      try {
        const resp = yield call(services.createLoan, evt.payload);
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


export function* updateLoan() {
  yield takeEvery(loanActions.UPDATE_LOAN_REQUEST,
    function* (evt) {
      const action = loanActions.updateLoan;
      const { id, data } = evt.payload;
      try {
        const resp = yield call(services.updateLoan, id, data);
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
    fork(getLoans),
    fork(getLoan),
    fork(updateLoan),
    fork(createLoan),
  ]);
}
