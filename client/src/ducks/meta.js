import { appName } from '../config';
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import Api from '../services/api';

export const moduleName = 'meta';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */

export const FETCH_META_DATA_REQUEST = `${prefix}/FETCH_META_DATA_REQUEST`;
export const FETCH_META_DATA_SUCCESS = `${prefix}/FETCH_META_DATA_SUCCESS`;
export const FETCH_META_DATA_ERROR = `${prefix}/FETCH_META_DATA_ERROR`;

/**
 * Reducer
 * */

export const ReducerRecord = fromJS({
  error: null,
  loading: true,
  metaData: {
    city: '',
    country: ''
  }
});

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_META_DATA_REQUEST:
      return state.set('loading', true);

    case FETCH_META_DATA_SUCCESS:
      return state
        .set('metaData', fromJS(payload.data))
        .set('loading', false)
        .set('error', null);

    case FETCH_META_DATA_ERROR:
      return state.set('error', payload.err).set('loading', false);

    default:
      return state;
  }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName];

export const loadingThreadsSelector = createSelector(
  stateSelector,
  (state) => state.get('loading')
);

export const locationSelector = createSelector(
  stateSelector,
  (state) => {
    const city = state.getIn(['metaData', 'city']);
    const country = state.getIn(['metaData', 'country']);

    return city && country ? city + ', ' + country : '';
  }
);

/**
 * Action Creators
 * */

export const getMetaData = () => {
  return {
    type: FETCH_META_DATA_REQUEST
  };
};

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
