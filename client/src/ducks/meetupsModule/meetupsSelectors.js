import { createSelector } from 'reselect';
import { moduleName } from './meetupsConstants';
import { authUserSelector, isAuthenticatedSelector } from '../authModule/authSelectors';

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
