import { appName } from '../config';
import { List, fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import Api from '../services/api';

export const moduleName = 'categories';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */
export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`;

export const FETCH_CATEGORIES_REQUEST = `${prefix}/FETCH_CATEGORIES_REQUEST`;
export const FETCH_CATEGORIES_SUCCESS = `${prefix}/FETCH_CATEGORIES_SUCCESS`;
export const FETCH_CATEGORIES_ERROR = `${prefix}/FETCH_CATEGORIES_ERROR`;

/**
 * Reducer
 * */
export const ReducerRecord = fromJS({
  user: 'Alex',
  error: null,
  loadingCategories: false,
  categories: new List([]),
  category: {}
});

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CATEGORIES_REQUEST:
    case FETCH_ALL_REQUEST:
      return state.set('loadingCategories', true);

    case FETCH_CATEGORIES_SUCCESS:
      return state
        .set('categories', fromJS(payload.data))
        .set('loadingCategories', false)
        .set('error', null);

    case FETCH_CATEGORIES_ERROR:
      return state.set('error', payload.err).set('loadingCategories', false);

    default:
      return state;
  }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName];

export const loadingCatSelector = createSelector(
  stateSelector,
  (state) => state.get('loadingCategories')
);

// export const allCategoriesSelector = createSelector(
//   stateSelector,
//   (state) => state.get('categories').toJS()
// );

export const allCategoriesSelector = createSelector(
  stateSelector,
  (state) => {
    const categories = state.get('categories');
    return categories ? categories.toJS() : null;
  }
);

/**
 * Action Creators
 * */

export const fetchAllCategories = () => {
  return {
    type: FETCH_ALL_REQUEST
  };
};

/**
 * Sagas
 */
export function* fetchAllCategoriesSaga() {
  try {
    yield put({
      type: FETCH_CATEGORIES_REQUEST
    });

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
  yield all([takeEvery(FETCH_ALL_REQUEST, fetchAllCategoriesSaga)]);
}
