import { appName } from '../../config';

export const moduleName = 'categories';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */
export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`;

export const FETCH_CATEGORIES_REQUEST = `${prefix}/FETCH_CATEGORIES_REQUEST`;
export const FETCH_CATEGORIES_SUCCESS = `${prefix}/FETCH_CATEGORIES_SUCCESS`;
export const FETCH_CATEGORIES_ERROR = `${prefix}/FETCH_CATEGORIES_ERROR`;
