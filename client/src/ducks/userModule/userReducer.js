/**
 * Reducer
 * */
import { fromJS } from 'immutable';
import { FETCH_USER_STATS_ERROR, FETCH_USER_STATS_REQUEST, FETCH_USER_STATS_SUCCESS } from './userConstants';

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
