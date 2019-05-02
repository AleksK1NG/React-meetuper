import { appName } from '../config';
import { List, fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { takeEvery, call, put, all, select } from 'redux-saga/effects';
import Api from '../services/api';
import { replace } from 'connected-react-router';
import { toast } from 'react-toastify';
import { rejectError } from '../utils/rejectErrorHelper';
import {
  ADD_MEETUP_TO_USER_SUCCESS,
  authUserSelector,
  DELETE_MEETUP_FROM_USER_SUCCESS,
  isAuthenticatedSelector
} from './auth';

export const moduleName = 'meetups';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */
export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`;

export const FETCH_BOOK_BY_ID = `${prefix}/FETCH_BOOK_BY_ID`;
export const FETCH_BOOK_BY_ID_REQUEST = `${prefix}/FETCH_BOOK_BY_ID_REQUEST`;

export const ADD_BOOK_SUCCESS = `${prefix}/ADD_BOOK_SUCCESS`;

export const DELETE_BOOK_REQUEST = `${prefix}/DELETE_BOOK_REQUEST`;
export const DELETE_BOOK_SUCCESS = `${prefix}/DELETE_BOOK_SUCCESS`;
export const DELETE_BOOK_ERROR = `${prefix}/DELETE_BOOK_ERROR`;

export const FETCH_MEETUPS_REQUEST = `${prefix}/FETCH_MEETUPS_REQUEST`;
export const FETCH_MEETUPS_SUCCESS = `${prefix}/FETCH_MEETUPS_SUCCESS`;
export const FETCH_MEETUPS_ERROR = `${prefix}/FETCH_MEETUPS_ERROR`;

export const FETCH_MEETUP_BY_ID = `${prefix}/FETCH_MEETUP_BY_ID`;
export const FETCH_MEETUP_BY_ID_REQUEST = `${prefix}/FETCH_MEETUP_BY_ID_REQUEST`;
export const FETCH_MEETUP_BY_ID_SUCCESS = `${prefix}/FETCH_MEETUP_BY_ID_SUCCESS`;
export const FETCH_MEETUP_BY_ID_ERROR = `${prefix}/FETCH_MEETUP_BY_ID_ERROR`;

export const CREATE_MEETUP_REQUEST = `${prefix}/CREATE_MEETUP_REQUEST`;
export const CREATE_MEETUP_SUCCESS = `${prefix}/CREATE_MEETUP_SUCCESS`;
export const CREATE_MEETUP_ERROR = `${prefix}/CREATE_MEETUP_ERROR`;

export const JOIN_MEETUP_REQUEST = `${prefix}/JOIN_MEETUP_REQUEST`;
export const JOIN_MEETUP_SUCCESS = `${prefix}/JOIN_MEETUP_SUCCESS`;
export const JOIN_MEETUP_ERROR = `${prefix}/JOIN_MEETUP_ERROR`;

export const LEAVE_MEETUP_REQUEST = `${prefix}/LEAVE_MEETUP_REQUEST`;
export const LEAVE_MEETUP_SUCCESS = `${prefix}/LEAVE_MEETUP_SUCCESS`;
export const LEAVE_MEETUP_ERROR = `${prefix}/LEAVE_MEETUP_ERROR`;

/**
 * Reducer
 * */

export const ReducerRecord = fromJS({
  user: 'Alex',
  error: null,
  loading: true,
  meetups: new List([]),
  meetup: null
});

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action;

  switch (type) {
    case JOIN_MEETUP_REQUEST:
    case LEAVE_MEETUP_REQUEST:
    case CREATE_MEETUP_REQUEST:
    case FETCH_MEETUP_BY_ID_REQUEST:
    case FETCH_MEETUPS_REQUEST:
    case FETCH_BOOK_BY_ID_REQUEST:
    case FETCH_BOOK_BY_ID:
      return state.set('loading', true);

    case FETCH_MEETUPS_SUCCESS:
      return state
        .set('meetups', fromJS(payload.data))
        .set('loading', false)
        .set('error', null);

    case FETCH_MEETUP_BY_ID_SUCCESS:
      return state
        .set('meetup', fromJS(payload.data))
        .set('loading', false)
        .set('error', null);

    case FETCH_MEETUPS_ERROR:
    case FETCH_MEETUP_BY_ID_ERROR:
    case LEAVE_MEETUP_ERROR:
    case JOIN_MEETUP_ERROR:
    case CREATE_MEETUP_ERROR:
      return state.set('error', payload.err).set('loading', false);

    case CREATE_MEETUP_SUCCESS:
      return state
        .set('meetup', fromJS(payload.meetup))
        .set('loading', false)
        .set('error', null);

    case ADD_BOOK_SUCCESS:
      return state
        .set('error', null)
        .set('loading', false)
        .update('books', (books) => books.push(fromJS(payload.data)));

    case DELETE_BOOK_SUCCESS:
      return state
        .set('loading', false)
        .set('error', null)
        .update('books', (books) => {
          return books.filter((book) => book.get('id') !== payload);
        });

    case 'UPDATE_MEETUP_SUCCESS':
      return state
        .set('error', null)
        .set('loading', false)
        .update('books', (books) =>
          books.map((book) =>
            book.get('id') === payload.data.id ? fromJS(payload.data) : book
          )
        );

    case JOIN_MEETUP_SUCCESS:
      return state
        .updateIn(['meetup', 'joinedPeople'], (joinedPeople) =>
          joinedPeople.push(fromJS(payload.user))
        )
        .set('error', null)
        .set('loading', false);

    case LEAVE_MEETUP_SUCCESS:
      return state
        .updateIn(['meetup', 'joinedPeople'], (joinedPeople) =>
          joinedPeople.filter((user) => user.get('_id') !== payload.user._id)
        )
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

export const loadingMeetupsSelector = createSelector(
  stateSelector,
  (state) => state.get('loading')
);
export const allMeetupsSelector = createSelector(
  stateSelector,
  (state) => {
    const meetups = state.get('meetups');
    return meetups ? meetups.toJS() : null;
  }
);
export const meetupSelector = createSelector(
  stateSelector,
  (state) => {
    const meetup = state.get('meetup');
    return meetup ? meetup.toJS() : null;
  }
);

export const singleMeetupSelector = createSelector(
  stateSelector,
  (state) => state.get('meetup')
);

export const meetupCreatorSelector = createSelector(
  [singleMeetupSelector, authUserSelector],
  (meetup, user) => {
    if (user && meetup) {
      return user.get('_id') === meetup.getIn(['meetupCreator', '_id']);
    }
    return false;
  }
);

export const isMemberSelector = createSelector(
  [singleMeetupSelector, authUserSelector],
  (meetup, user) => {
    if (user && meetup) {
      return user.get('joinedMeetups').includes(meetup.get('_id'));
    }
    return false;
  }
);

export const canJoinMeetupSelector = createSelector(
  [meetupCreatorSelector, isMemberSelector, isAuthenticatedSelector],
  (isCreator, isMember, isAuthenticated) => {
    if (!isCreator && !isMember && isAuthenticated) {
      return true;
    }
    return false;
  }
);

/**
 * Action Creators
 * */

export const fetchAllMeetups = () => {
  return {
    type: FETCH_ALL_REQUEST
  };
};

export const fetchMeetupById = (meetupId) => {
  return {
    type: FETCH_MEETUP_BY_ID,
    payload: { meetupId }
  };
};

export const createMeetup = (meetup) => {
  return {
    type: CREATE_MEETUP_REQUEST,
    payload: { meetup }
  };
};

export const joinMeetup = (meetupId) => {
  return {
    type: JOIN_MEETUP_REQUEST,
    payload: { meetupId }
  };
};

export const leaveMeetup = (meetupId) => {
  return {
    type: LEAVE_MEETUP_REQUEST,
    payload: { meetupId }
  };
};

/**
 * Sagas
 */
export function* fetchAllMeetupsSaga() {
  try {
    yield put({
      type: FETCH_MEETUPS_REQUEST
    });

    const { data } = yield call(Api.getAllMeetups);

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

  // const user = state.auth.get('user').toJS();
  // const category = state.categories.get('categories').toJS().find(e => e._id === payload.meetup.category)

  // payload.meetup.category = state.categories
  //   .get('categories')
  //   .toJS()
  //   .find((e) => e._id === payload.meetup.category);
  payload.meetup.meetupCreator = state.auth.get('user').toJS();
  payload.meetup.processedLocation = payload.meetup.location
    .toLowerCase()
    .replace(/[\s,]+/g, '')
    .trim();

  console.log('before request =>', payload.meetup);

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

    debugger;
    // yield put(replace(`/meetups/${data._id}`));
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

    debugger;
    // yield put(replace(`/meetups/${data._id}`));
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

export function* saga() {
  yield all([
    takeEvery(FETCH_ALL_REQUEST, fetchAllMeetupsSaga),
    takeEvery(FETCH_MEETUP_BY_ID, fetchMeetupByIdSaga),
    takeEvery(CREATE_MEETUP_REQUEST, createMeetupSaga),
    takeEvery(JOIN_MEETUP_REQUEST, joinMeetupSaga),
    takeEvery(LEAVE_MEETUP_REQUEST, leaveMeetupSaga)
  ]);
}
