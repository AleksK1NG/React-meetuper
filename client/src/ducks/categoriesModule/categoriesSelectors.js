import { createSelector } from 'reselect';
/**
 * Selectors
 * */
import { moduleName } from '../categoriesModule/categoriesConstants';

export const stateSelector = (state) => state[moduleName];

export const loadingCatSelector = createSelector(
  stateSelector,
  (state) => state.get('loading')
);

export const allCategoriesSelector = createSelector(
  stateSelector,
  (state) => {
    const categories = state.get('categories');
    return categories ? categories.toJS() : null;
  }
);
