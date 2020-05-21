import {
  all, takeEvery, takeLatest, put, fork, call,
} from 'redux-saga/effects';
import assetActions from './actions';
import services from '../services';
import { getErrorMessage, isEmptyObject } from '../../helpers/utility';

export function* getAssets() {
  yield takeLatest(assetActions.GET_ASSETS_REQUEST,
    function* (evt) {
      const action = assetActions.getAssets;
      try {
        const resp = yield call(services.getAssets, evt.payload);
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

export function* getAsset() {
  yield takeLatest(assetActions.GET_ASSET_REQUEST,
    function* (evt) {
      const action = assetActions.getAsset;
      const { id } = evt.payload;
      try {
        const resp = yield call(services.getAsset, id);
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


export function* createAsset() {
  yield takeLatest(assetActions.CREATE_ASSET_REQUEST,
    function* (evt) {
      const action = assetActions.createAsset;
      try {
        const resp = yield call(services.createAsset, evt.payload);
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


export function* updateAsset() {
  yield takeEvery(assetActions.UPDATE_ASSET_REQUEST,
    function* (evt) {
      const action = assetActions.updateAsset;
      const { id, data } = evt.payload;
      try {
        const resp = yield call(services.updateAsset, id, data);
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
    fork(getAssets),
    fork(getAsset),
    fork(updateAsset),
    fork(createAsset),
  ]);
}
