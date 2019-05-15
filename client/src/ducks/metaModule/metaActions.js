/**
 * Action Creators
 * */

import { FETCH_META_DATA_REQUEST } from './metaConstants';

export const getMetaData = () => {
  return {
    type: FETCH_META_DATA_REQUEST
  };
};
