import { appName } from '../../config';

export const moduleName = 'threads';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */

export const FETCH_THREADS_BY_ID_REQUEST = `${prefix}/FETCH_THREADS_BY_ID_REQUEST`;
export const FETCH_THREADS_BY_ID_SUCCESS = `${prefix}/FETCH_THREADS_BY_ID_SUCCESS`;
export const FETCH_THREADS_BY_ID_ERROR = `${prefix}/FETCH_THREADS_BY_ID_ERROR`;

export const CREATE_THREAD_REQUEST = `${prefix}/CREATE_THREAD_REQUEST`;
export const CREATE_THREAD_SUCCESS = `${prefix}/CREATE_THREAD_SUCCESS`;
export const CREATE_THREAD_ERROR = `${prefix}/CREATE_THREAD_ERROR`;

export const CREATE_POST_REQUEST = `${prefix}/CREATE_POST_REQUEST`;
export const CREATE_POST_SUCCESS = `${prefix}/CREATE_POST_SUCCESS`;
export const CREATE_POST_ERROR = `${prefix}/CREATE_POST_ERROR`;

export const INIT_THREADS_SUCCESS = `${prefix}/INIT_THREADS_SUCCESS`;
