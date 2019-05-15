/**
 * Reducer
 * */
import { fromJS, List } from 'immutable';
import {
  CREATE_POST_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_THREAD_ERROR,
  CREATE_THREAD_REQUEST,
  CREATE_THREAD_SUCCESS,
  FETCH_THREADS_BY_ID_ERROR,
  FETCH_THREADS_BY_ID_SUCCESS,
  INIT_THREADS_SUCCESS
} from './threadsConstants';

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
    case CREATE_POST_REQUEST:
    case CREATE_THREAD_REQUEST:
      return state.set('loading', true);

    case FETCH_THREADS_BY_ID_SUCCESS:
      const newThreads = fromJS(payload.threads);
      return state
        .update('threads', (threads) => threads.concat(newThreads))
        .set('isAllDataLoaded', payload.isAllDataLoaded)
        .set('loading', false)
        .set('error', null);

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
      const threadIndex = state.get('threads').findIndex((thread) => thread.get('_id') === payload.threadId);

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
