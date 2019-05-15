import { takeEvery, call, put, all, select } from 'redux-saga/effects';
import Api from '../../services/api';
import { replace } from 'connected-react-router';
import { toast } from 'react-toastify';
import {
  CREATE_MEETUP_ERROR,
  CREATE_MEETUP_REQUEST,
  CREATE_MEETUP_SUCCESS,
  FETCH_ALL_REQUEST,
  FETCH_MEETUP_BY_ID,
  FETCH_MEETUP_BY_ID_ERROR,
  FETCH_MEETUP_BY_ID_REQUEST,
  FETCH_MEETUP_BY_ID_SUCCESS,
  FETCH_MEETUPS_ERROR,
  FETCH_MEETUPS_SUCCESS,
  JOIN_MEETUP_REQUEST,
  JOIN_MEETUP_SUCCESS,
  LEAVE_MEETUP_ERROR,
  LEAVE_MEETUP_REQUEST,
  LEAVE_MEETUP_SUCCESS,
  UPDATE_MEETUP_ERROR,
  UPDATE_MEETUP_REQUEST,
  UPDATE_MEETUP_SUCCESS
} from './meetupsConstants';
import { rejectError } from '../../utils/rejectErrorHelper';
import { ADD_MEETUP_TO_USER_SUCCESS, DELETE_MEETUP_FROM_USER_SUCCESS } from '../authModule/authConstants';

/**
 * Sagas
 */
export function* fetchAllMeetupsSaga(action) {
  const {
    payload: { options }
  } = action;

  try {
    const { data } = yield call(Api.getAllMeetups, options);

    yield put({
      type: FETCH_MEETUPS_SUCCESS,
      payload: { data }
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: FETCH_MEETUPS_ERROR,
      payload: { err }
    });
  }
}

export function* fetchMeetupByIdSaga(action) {
  const { payload } = action;

  try {
    yield put({
      type: FETCH_MEETUP_BY_ID_REQUEST
    });

    const { data } = yield call(Api.getMeetupById, payload.meetupId);

    yield put({
      type: FETCH_MEETUP_BY_ID_SUCCESS,
      payload: { data }
    });
  } catch (err) {
    console.log(err);

    yield put({
      type: FETCH_MEETUP_BY_ID_ERROR,
      payload: { err }
    });
  }
}

export function* createMeetupSaga(action) {
  const { payload } = action;
  const state = yield select();

  payload.meetup.meetupCreator = state.auth.get('user').toJS();
  payload.meetup.processedLocation = payload.meetup.location
    .toLowerCase()
    .replace(/[\s,]+/g, '')
    .trim();

  try {
    const { data } = yield call(Api.createMeetup, payload.meetup);
    yield put({
      type: CREATE_MEETUP_SUCCESS,
      payload: { data }
    });

    yield put(replace(`/meetups/${data._id}`));
    toast.success('Success, meetup created ! =D');
  } catch (err) {
    console.log(err);
    yield put({
      type: CREATE_MEETUP_ERROR,
      payload: { err }
    });
    toast.error(rejectError(err));
  }
}

export function* joinMeetupSaga(action) {
  const { payload } = action;
  const state = yield select();
  const user = state.auth.get('user').toJS();

  try {
    const {
      data: { id }
    } = yield call(Api.joinMeetup, payload.meetupId);
    yield put({
      type: ADD_MEETUP_TO_USER_SUCCESS,
      payload: { id }
    });
    yield put({
      type: JOIN_MEETUP_SUCCESS,
      payload: { user }
    });

    toast.success('Success, you have joined meetup ! =D');
  } catch (err) {
    console.log(err);
    yield put({
      type: CREATE_MEETUP_ERROR,
      payload: { err }
    });
    toast.error(rejectError(err));
  }
}

export function* leaveMeetupSaga(action) {
  const { payload } = action;
  const state = yield select();
  const user = state.auth.get('user').toJS();

  try {
    const {
      data: { id }
    } = yield call(Api.leaveMeetup, payload.meetupId);
    yield put({
      type: DELETE_MEETUP_FROM_USER_SUCCESS,
      payload: { id }
    });
    yield put({
      type: LEAVE_MEETUP_SUCCESS,
      payload: { user }
    });

    toast.success('Success, you have left meetup ! =D');
  } catch (err) {
    console.log(err);
    yield put({
      type: LEAVE_MEETUP_ERROR,
      payload: { err }
    });
    toast.error(rejectError(err));
  }
}

export function* updateMeetupSaga(action) {
  const {
    payload: { meetupData }
  } = action;

  try {
    yield put({
      type: FETCH_MEETUP_BY_ID_REQUEST
    });

    const { data } = yield call(Api.updateMeetup, meetupData);

    yield put({
      type: UPDATE_MEETUP_SUCCESS,
      payload: { data }
    });
    debugger;
    yield put(replace(`/meetups/${data._id}`));
    toast.success('Success, meetup has been updated ! =D');
  } catch (err) {
    console.log(err);

    yield put({
      type: UPDATE_MEETUP_ERROR,
      payload: { err }
    });
    toast.error(rejectError(err));
  }
}

export function* saga() {
  yield all([
    takeEvery(FETCH_ALL_REQUEST, fetchAllMeetupsSaga),
    takeEvery(FETCH_MEETUP_BY_ID, fetchMeetupByIdSaga),
    takeEvery(CREATE_MEETUP_REQUEST, createMeetupSaga),
    takeEvery(JOIN_MEETUP_REQUEST, joinMeetupSaga),
    takeEvery(LEAVE_MEETUP_REQUEST, leaveMeetupSaga),
    takeEvery(UPDATE_MEETUP_REQUEST, updateMeetupSaga)
  ]);
}
