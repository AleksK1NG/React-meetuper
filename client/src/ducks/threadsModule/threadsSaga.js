import { takeEvery, call, put, all } from 'redux-saga/effects';
import Api from '../../services/api';
import { toast } from 'react-toastify';
import {
  CREATE_POST_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_THREAD_ERROR,
  CREATE_THREAD_REQUEST,
  CREATE_THREAD_SUCCESS,
  FETCH_THREADS_BY_ID_ERROR,
  FETCH_THREADS_BY_ID_REQUEST,
  FETCH_THREADS_BY_ID_SUCCESS,
  INIT_THREADS_SUCCESS
} from './threadsConstants';
import { rejectError } from '../../utils/rejectErrorHelper';

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
