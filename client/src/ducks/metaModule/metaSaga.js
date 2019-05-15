import Api from '../../services/api';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import { FETCH_META_DATA_ERROR, FETCH_META_DATA_REQUEST, FETCH_META_DATA_SUCCESS } from './metaConstants';

/**
 * Sagas
 */

export function* fetchMetaDataSaga() {
  try {
    const { data } = yield call(Api.getMetaData);

    yield put({
      type: FETCH_META_DATA_SUCCESS,
      payload: { data }
    });
  } catch (err) {
    console.log(err);

    yield put({
      type: FETCH_META_DATA_ERROR,
      payload: { err }
    });
  }
}

export function* saga() {
  yield all([takeEvery(FETCH_META_DATA_REQUEST, fetchMetaDataSaga)]);
}
