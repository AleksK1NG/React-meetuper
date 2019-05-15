import { appName } from '../../config';

export const moduleName = 'user';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */

export const FETCH_USER_STATS_REQUEST = `${prefix}/FETCH_USER_STATS_REQUEST`;
export const FETCH_USER_STATS_SUCCESS = `${prefix}/FETCH_USER_STATS_SUCCESS`;
export const FETCH_USER_STATS_ERROR = `${prefix}/FETCH_USER_STATS_ERROR`;
