import { takeEvery, call, put, all } from 'redux-saga/effects';
import Api from '../../services/api';
import { FETCH_USER_STATS_ERROR, FETCH_USER_STATS_REQUEST, FETCH_USER_STATS_SUCCESS } from './userConstants';

/**
 * Sagas
 */

export function* fetchUserStatsSaga() {
  try {
    const {
      data: { meetups, threads, posts }
    } = yield call(Api.getUserStats);

    yield put({
      type: FETCH_USER_STATS_SUCCESS,
      payload: { meetups, threads, posts }
    });
  } catch (err) {
    console.log(err);

    yield put({
      type: FETCH_USER_STATS_ERROR,
      payload: { err }
    });
  }
}

export function* saga() {
  yield all([takeEvery(FETCH_USER_STATS_REQUEST, fetchUserStatsSaga)]);
}
