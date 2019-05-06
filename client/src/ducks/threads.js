import { appName } from '../config';
import { List, fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import Api from '../services/api';
import { toast } from 'react-toastify';
import { rejectError } from '../utils/rejectErrorHelper';
import { isAuthenticatedSelector } from './auth';
import { isMemberSelector, meetupCreatorSelector } from './meetups';

export const moduleName = 'threads';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */

export const FETCH_THREADS_BY_ID_REQUEST = `${prefix}/FETCH_THREADS_BY_ID_REQUEST`;
export const FETCH_THREADS_BY_ID_SUCCESS = `${prefix}/FETCH_THREADS_BY_ID_SUCCESS`;
export const FETCH_THREADS_BY_ID_ERROR = `${prefix}/FETCH_THREADS_BY_ID_ERROR`;

export const CREATE_THREAD_REQUEST = `${prefix}/CREATE_THREAD_REQUEST`;
export const CREATE_THREAD_SUCCESS = `${prefix}/CREATE_THREAD_SUCCESST`;
export const CREATE_THREAD_ERROR = `${prefix}/CREATE_THREAD_ERROR`;

export const CREATE_POST_REQUEST = `${prefix}/CREATE_POST_REQUEST`;
export const CREATE_POST_SUCCESS = `${prefix}/CREATE_POST_SUCCESST`;
export const CREATE_POST_ERROR = `${prefix}/CREATE_POST_ERROR`;

export const INIT_THREADS_SUCCESS = `${prefix}/INIT_THREADS_SUCCESS`;

/**
 * Reducer
 * */

export const ReducerRecord = fromJS({
  user: 'Alex',
  error: null,
  loading: true,
  threads: new List([]),
  thread: {},
  isAllDataLoaded: false
});

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_THREADS_BY_ID_REQUEST:
    case CREATE_POST_REQUEST:
    case CREATE_THREAD_REQUEST:
      return state.set('loading', true);

    case FETCH_THREADS_BY_ID_SUCCESS:
      const newThreads = fromJS(payload.threads);
      return (
        state
          // .set('threads', fromJS(payload.threads))
          .update('threads', (threads) => threads.concat(newThreads))
          // .merge({ threads: fromJS(payload.threads) })
          .set('isAllDataLoaded', payload.isAllDataLoaded)
          .set('loading', false)
          .set('error', null)
      );

    case FETCH_THREADS_BY_ID_ERROR:
    case CREATE_POST_ERROR:
    case CREATE_THREAD_ERROR:
      return state.set('error', payload.err).set('loading', false);

    case CREATE_THREAD_SUCCESS:
      return state
        .update('threads', (threads) => threads.push(fromJS(payload.data)))
        .set('error', null)
        .set('loading', false);

    case CREATE_POST_SUCCESS:
      const threadIndex = state
        .get('threads')
        .findIndex((thread) => thread.get('_id') === payload.threadId);

      return state
        .updateIn(['threads', threadIndex, 'posts'], (posts) => {
          if (threadIndex > -1) {
            return posts.push(fromJS(payload.data));
          }
          return posts;
        })
        .set('error', null)
        .set('loading', false);

    case INIT_THREADS_SUCCESS:
      return state.set('threads', new List([]));

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
export const threadsSelector = createSelector(
  stateSelector,
  (state) => state.get('threads').toJS()
);

export const threadsSortedSelector = createSelector(
  stateSelector,
  (state) =>
    state
      .get('threads')
      .sort((thread, nextThread) => {
        return (
          new Date(nextThread.get('createdAt')) -
          new Date(thread.get('createdAt'))
        );
      })
      .toJS()
);

export const canCratePostSelector = createSelector(
  [meetupCreatorSelector, isMemberSelector, isAuthenticatedSelector],
  (isCreator, isMember, isAuthenticated) => {
    if (isAuthenticated && (isCreator || isMember)) {
      return true;
    }
    return false;
  }
);

export const isAllDataLoadedSelector = createSelector(
  stateSelector,
  (state) => state.get('isAllDataLoaded')
);

/**
 * Action Creators
 * */

export const fetchThreadsById = (meetupId, page = 1, init) => {
  const filter = {
    pageSize: 5,
    pageNum: page
  };
  return {
    type: FETCH_THREADS_BY_ID_REQUEST,
    payload: { meetupId, filter, init }
  };
};

export const createThread = (title, meetupId) => {
  return {
    type: CREATE_THREAD_REQUEST,
    payload: { title, meetupId }
  };
};

export const createPost = (text, threadId) => {
  return {
    type: CREATE_POST_REQUEST,
    payload: { text, threadId }
  };
};

/**
 * Sagas
 */
export function* fetchThreadsByIdSaga(action) {
  const {
    payload: { meetupId, filter, init }
  } = action;
  if (init) {
    yield put({
      type: INIT_THREADS_SUCCESS
    });
  }

  try {
    const {
      data: { threads, isAllDataLoaded }
    } = yield call(Api.getThreadsById, { meetupId: meetupId, filter });
    yield put({
      type: FETCH_THREADS_BY_ID_SUCCESS,
      payload: { threads, isAllDataLoaded }
    });
  } catch (err) {
    console.log(err);

    yield put({
      type: FETCH_THREADS_BY_ID_ERROR,
      payload: { err }
    });
  }
}

export function* createThreadSaga(action) {
  const {
    payload: { title, meetupId }
  } = action;
  const thread = {};
  thread.title = title;
  thread.meetup = meetupId;

  try {
    const { data } = yield call(Api.createThread, thread);

    yield put({
      type: CREATE_THREAD_SUCCESS,
      payload: { data }
    });

    toast.success('Success, thread created ! =D');
  } catch (err) {
    console.log(err);
    yield put({
      type: CREATE_THREAD_ERROR,
      payload: { err }
    });
    toast.error(rejectError(err));
  }
}

export function* createPostSaga(action) {
  const {
    payload: { text, threadId }
  } = action;
  const post = { text, thread: threadId };

  try {
    const { data } = yield call(Api.createPost, post);

    yield put({
      type: CREATE_POST_SUCCESS,
      payload: { data, threadId }
    });

    toast.success('Success, post created ! =D');
  } catch (err) {
    console.log(err);
    yield put({
      type: CREATE_POST_ERROR,
      payload: { err }
    });
    toast.error(rejectError(err));
  }
}

export function* saga() {
  yield all([
    takeEvery(FETCH_THREADS_BY_ID_REQUEST, fetchThreadsByIdSaga),
    takeEvery(CREATE_THREAD_REQUEST, createThreadSaga),
    takeEvery(CREATE_POST_REQUEST, createPostSaga)
  ]);
}
