import { createSelector } from 'reselect';

/**
 * Selectors
 * */

import { moduleName } from './authConstants';

export const stateSelector = (state) => state[moduleName];

export const isAuthenticatedSelector = createSelector(
  stateSelector,
  (state) => state.get('isAuthenticated')
);

export const userSelector = createSelector(
  stateSelector,
  (state) => {
    const user = state.get('user');
    return user ? user.toJS() : null;
  }
);

export const toastMessageSelector = createSelector(
  stateSelector,
  (state) => {
    const message = state.get('toastMessage');
    return message ? message : null;
  }
);

export const authUserSelector = createSelector(
  stateSelector,
  (state) => state.get('user')
);
