/**
 * Action Creators
 * */

import { FETCH_USER_STATS_REQUEST } from './userConstants';

export const fetchUserStats = () => {
  return {
    type: FETCH_USER_STATS_REQUEST
  };
};
