import { createSelector } from 'reselect';
import { moduleName } from './userConstants';

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName];

export const userThreadsSelector = createSelector(
  stateSelector,
  (state) => {
    const threads = state.get('threads');
    return threads ? threads.toJS() : null;
  }
);

export const userPostsSelector = createSelector(
  stateSelector,
  (state) => {
    const posts = state.get('posts');
    return posts ? posts.toJS() : null;
  }
);

export const userMeetupsSelector = createSelector(
  stateSelector,
  (state) => {
    const meetups = state.get('meetups');
    return meetups ? meetups.toJS() : null;
  }
);

export const meetupsCountSelector = createSelector(
  stateSelector,
  (state) => state.get('meetupsCount')
);

export const threadsCountSelector = createSelector(
  stateSelector,
  (state) => state.get('threadsCount')
);

export const postsCountSelector = createSelector(
  stateSelector,
  (state) => state.get('postsCount')
);
