/**
 * Reducer
 * */
import { fromJS } from 'immutable';
import { FETCH_META_DATA_ERROR, FETCH_META_DATA_REQUEST, FETCH_META_DATA_SUCCESS } from './metaConstants';

export const ReducerRecord = fromJS({
  error: null,
  loading: true,
  metaData: {
    city: '',
    country: ''
  }
});

export default function reducer(state = ReducerRecord, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_META_DATA_REQUEST:
      return state.set('loading', true);

    case FETCH_META_DATA_SUCCESS:
      return state
        .set('metaData', fromJS(payload.data))
        .set('loading', false)
        .set('error', null);

    case FETCH_META_DATA_ERROR:
      return state.set('error', payload.err).set('loading', false);

    default:
      return state;
  }
}
