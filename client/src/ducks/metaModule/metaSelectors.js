import { createSelector } from 'reselect';
import { moduleName } from './metaConstants';
/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName];

export const locationSelector = createSelector(
  stateSelector,
  (state) => {
    const city = state.getIn(['metaData', 'city']);
    const country = state.getIn(['metaData', 'country']);

    return city && country ? city + ', ' + country : '';
  }
);
