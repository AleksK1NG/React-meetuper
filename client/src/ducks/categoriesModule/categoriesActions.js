/**
 * Action Creators
 * */

import { FETCH_CATEGORIES_REQUEST } from './categoriesConstants';

export const fetchAllCategories = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST
  };
};
