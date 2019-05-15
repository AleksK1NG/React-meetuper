import { createSelector } from 'reselect';
import { moduleName } from './threadsConstants';
import { isMemberSelector, meetupCreatorSelector } from '../meetupsModule/meetupsSelectors';
import { isAuthenticatedSelector } from '../authModule/authSelectors';

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName];

export const loadingThreadsSelector = createSelector(
  stateSelector,
  (state) => state.get('loading')
);
export const threadsSelector = createSelector(
  stateSelector,
  (state) => state.get('threads').toJS()
);

export const threadsSortedSelector = createSelector(
  stateSelector,
  (state) =>
    state
      .get('threads')
      .sort((thread, nextThread) => {
        return new Date(nextThread.get('createdAt')) - new Date(thread.get('createdAt'));
      })
      .toJS()
);

export const canCratePostSelector = createSelector(
  [meetupCreatorSelector, isMemberSelector, isAuthenticatedSelector],
  (isCreator, isMember, isAuthenticated) => {
    if (isAuthenticated && (isCreator || isMember)) {
      return true;
    }
    return false;
  }
);

export const isAllDataLoadedSelector = createSelector(
  stateSelector,
  (state) => state.get('isAllDataLoaded')
);
