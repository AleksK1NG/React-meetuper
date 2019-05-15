import { takeEvery, call, put, all } from 'redux-saga/effects';
import Api from '../../services/api';
import { FETCH_CATEGORIES_ERROR, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from './categoriesConstants';

/**
 * Sagas
 */
export function* fetchAllCategoriesSaga() {
  try {
    const { data } = yield call(Api.getAllCategories);

    yield put({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: { data }
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: FETCH_CATEGORIES_ERROR,
      payload: { err }
    });
  }
}

export function* saga() {
  yield all([takeEvery(FETCH_CATEGORIES_REQUEST, fetchAllCategoriesSaga)]);
}
