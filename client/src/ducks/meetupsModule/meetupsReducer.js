/**
 * Reducer
 * */
import { fromJS, List } from 'immutable';
import {
  CREATE_MEETUP_ERROR,
  CREATE_MEETUP_REQUEST,
  CREATE_MEETUP_SUCCESS,
  FETCH_MEETUP_BY_ID_ERROR,
  FETCH_MEETUP_BY_ID_REQUEST,
  FETCH_MEETUP_BY_ID_SUCCESS,
  FETCH_MEETUPS_ERROR,
  FETCH_MEETUPS_REQUEST,
  FETCH_MEETUPS_SUCCESS,
  JOIN_MEETUP_ERROR,
  JOIN_MEETUP_REQUEST,
  JOIN_MEETUP_SUCCESS,
  LEAVE_MEETUP_ERROR,
  LEAVE_MEETUP_REQUEST,
  LEAVE_MEETUP_SUCCESS,
  UPDATE_MEETUP_ERROR,
  UPDATE_MEETUP_REQUEST,
  UPDATE_MEETUP_SUCCESS
} from './meetupsConstants';

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
    case UPDATE_MEETUP_REQUEST:
    case JOIN_MEETUP_REQUEST:
    case LEAVE_MEETUP_REQUEST:
    case CREATE_MEETUP_REQUEST:
    case FETCH_MEETUP_BY_ID_REQUEST:
    case FETCH_MEETUPS_REQUEST:
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

    case UPDATE_MEETUP_ERROR:
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

    case JOIN_MEETUP_SUCCESS:
      return state
        .updateIn(['meetup', 'joinedPeople'], (joinedPeople) => joinedPeople.push(fromJS(payload.user)))
        .set('error', null)
        .set('loading', false);

    case LEAVE_MEETUP_SUCCESS:
      return state
        .updateIn(['meetup', 'joinedPeople'], (joinedPeople) =>
          joinedPeople.filter((user) => user.get('_id') !== payload.user._id)
        )
        .set('error', null)
        .set('loading', false);

    case UPDATE_MEETUP_SUCCESS:
      return state
        .set('meetup', fromJS(payload.data))
        .set('error', null)
        .set('loading', false);

    default:
      return state;
  }
}
