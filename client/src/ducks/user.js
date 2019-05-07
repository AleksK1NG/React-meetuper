import { appName } from '../config';
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import Api from '../services/api';

export const moduleName = 'user';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */

export const FETCH_USER_STATS_REQUEST = `${prefix}/FETCH_USER_STATS_REQUEST`;
export const FETCH_USER_STATS_SUCCESS = `${prefix}/FETCH_USER_STATS_SUCCESS`;
export const FETCH_USER_STATS_ERROR = `${prefix}/FETCH_USER_STATS_ERROR`;

/**
 * Reducer
 * */

export const ReducerRecord = fromJS({
  user: 'Alex',
  error: null,
  loading: true,
  meetups: null,
  meetupsCount: null,
  threads: null,
  threadsCount: null,
  posts: null,
  postsCount: null
});

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USER_STATS_REQUEST:
      return state.set('loading', true);

    case FETCH_USER_STATS_SUCCESS:
      return state
        .merge({
          meetups: fromJS(payload.meetups.data),
          threads: fromJS(payload.threads.data),
          posts: fromJS(payload.posts.data),
          postsCount: payload.posts.count,
          threadsCount: payload.threads.count,
          meetupsCount: payload.meetups.count
        })
        .set('loading', false)
        .set('error', null);

    case FETCH_USER_STATS_ERROR:
      return state.set('error', payload.err).set('loading', false);

    default:
      return state;
  }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName];

export const userThreadsSelector = createSelector(
  stateSelector,
  (state) => {
    const threads = state.get('threads');
    return threads ? threads.toJS() : null;
  }
);

export const userPostsSelector = createSelector(
  stateSelector,
  (state) => {
    const posts = state.get('posts');
    return posts ? posts.toJS() : null;
  }
);

export const userMeetupsSelector = createSelector(
  stateSelector,
  (state) => {
    const meetups = state.get('meetups');
    return meetups ? meetups.toJS() : null;
  }
);

export const meetupsCountSelector = createSelector(
  stateSelector,
  (state) => state.get('meetupsCount')
);

export const threadsCountSelector = createSelector(
  stateSelector,
  (state) => state.get('threadsCount')
);

export const postsCountSelector = createSelector(
  stateSelector,
  (state) => state.get('postsCount')
);

/**
 * Action Creators
 * */

export const fetchUserStats = () => {
  return {
    type: FETCH_USER_STATS_REQUEST
  };
};

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
