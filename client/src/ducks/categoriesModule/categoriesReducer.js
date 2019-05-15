/**
 * Reducer
 * */
import { fromJS } from 'immutable';
import { FETCH_CATEGORIES_ERROR, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from './categoriesConstants';

export const ReducerRecord = fromJS({
  user: 'Alex',
  error: null,
  loading: false,
  categories: null,
  category: {}
});

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CATEGORIES_REQUEST:
      return state.set('loading', true);

    case FETCH_CATEGORIES_SUCCESS:
      return state
        .set('categories', fromJS(payload.data))
        .set('loading', false)
        .set('error', null);

    case FETCH_CATEGORIES_ERROR:
      return state.set('error', payload.err).set('loading', false);

    default:
      return state;
  }
}
