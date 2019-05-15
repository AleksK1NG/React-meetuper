import { appName } from '../../config';

export const moduleName = 'meta';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */

export const FETCH_META_DATA_REQUEST = `${prefix}/FETCH_META_DATA_REQUEST`;
export const FETCH_META_DATA_SUCCESS = `${prefix}/FETCH_META_DATA_SUCCESS`;
export const FETCH_META_DATA_ERROR = `${prefix}/FETCH_META_DATA_ERROR`;
