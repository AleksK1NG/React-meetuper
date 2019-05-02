import { appName } from '../config';
import { List, fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import Api from '../services/api';
import { toast } from 'react-toastify';
import { rejectError } from '../utils/rejectErrorHelper';

export const moduleName = 'threads';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */

export const FETCH_THREADS_BY_ID = `${prefix}/FETCH_MEETUP_BY_ID`;
export const FETCH_THREADS_BY_ID_REQUEST = `${prefix}/FETCH_THREADS_BY_ID_REQUEST`;
export const FETCH_THREADS_BY_ID_SUCCESS = `${prefix}/FETCH_THREADS_BY_ID_SUCCESS`;
export const FETCH_THREADS_BY_ID_ERROR = `${prefix}/FETCH_THREADS_BY_ID_ERROR`;

export const CREATE_THREAD_REQUEST = `${prefix}/CREATE_THREAD_REQUEST`;
export const CREATE_THREAD_SUCCESST = `${prefix}/CREATE_THREAD_SUCCESST`;
export const CREATE_THREAD_ERROR = `${prefix}/CREATE_THREAD_ERROR`;

/**
 * Reducer
 * */

export const ReducerRecord = fromJS({
  user: 'Alex',
  error: null,
  loading: true,
  threads: new List([]),
  thread: {}
});

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_THREADS_BY_ID_REQUEST:
    case CREATE_THREAD_REQUEST:
      return state.set('loading', true);

    case FETCH_THREADS_BY_ID_SUCCESS:
      return state
        .set('threads', fromJS(payload.data))
        .set('loading', false)
        .set('error', null);

    case FETCH_THREADS_BY_ID_ERROR:
      return state.set('error', payload.err).set('loading', false);

    case CREATE_THREAD_SUCCESST:
      return state
        .update('threads', (threads) => threads.push(fromJS(payload.data)))
        .set('error', null)
        .set('loading', false);

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

/**
 * Action Creators
 * */

export const fetchThreadsById = (meetupId) => {
  return {
    type: FETCH_THREADS_BY_ID,
    payload: { meetupId }
  };
};

export const createThread = (title, meetupId) => {
  return {
    type: CREATE_THREAD_REQUEST,
    payload: { title, meetupId }
  };
};

/**
 * Sagas
 */
export function* fetchAllThreadsSaga() {
  try {
    yield put({
      type: FETCH_THREADS_BY_ID_REQUEST
    });

    const { data } = yield call(Api.getAllMeetups);

    yield put({
      type: FETCH_THREADS_BY_ID_SUCCESS,
      payload: { data }
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: FETCH_THREADS_BY_ID_ERROR,
      payload: { err }
    });
    toast.error(rejectError(err));
  }
}

export function* fetchThreadsByIdSaga(action) {
  const { payload } = action;

  try {
    yield put({
      type: FETCH_THREADS_BY_ID_REQUEST
    });

    const { data } = yield call(Api.getThreadsById, payload.meetupId);

    yield put({
      type: FETCH_THREADS_BY_ID_SUCCESS,
      payload: { data }
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
      type: CREATE_THREAD_SUCCESST,
      payload: { data }
    });
    debugger;

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

export function* saga() {
  yield all([
    takeEvery(FETCH_THREADS_BY_ID, fetchThreadsByIdSaga),
    takeEvery(CREATE_THREAD_REQUEST, createThreadSaga)
  ]);
}
