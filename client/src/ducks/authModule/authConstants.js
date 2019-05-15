/**
 * Constants
 * */
import { appName } from '../../config';

export const moduleName = 'auth';
const prefix = `${appName}/${moduleName}`;

export const SIGN_IN_REQUEST = `${prefix}/SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`;
export const SIGN_IN_ERROR = `${prefix}/SIGN_IN_ERROR`;
export const SIGN_UP_REQUEST = `${prefix}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`;
export const SIGN_UP_ERROR = `${prefix}/SIGN_UP_ERROR`;
export const LOAD_USER_REQUEST = `${prefix}/LOAD_USER_REQUEST`;
export const LOAD_USER_SUCCESS = `${prefix}/LOAD_USER_SUCCESS`;
export const LOAD_USER_ERROR = `${prefix}/LOAD_USER_ERROR`;
export const SIGN_OUT_REQUEST = `${prefix}/SIGN_OUT_REQUEST`;
export const SIGN_OUT_SUCCESS = `${prefix}/SIGN_OUT_SUCCESS`;
export const SIGN_OUT_ERROR = `${prefix}/SIGN_OUT_ERROR`;

export const ADD_MEETUP_TO_USER_SUCCESS = `${prefix}/ADD_MEETUP_TO_USER_SUCCESS`;

export const DELETE_MEETUP_FROM_USER_SUCCESS = `${prefix}/REMOVE_MEETUP_FROM_USER_SUCCESS`;

export const UPDATE_USER_REQUEST = `${prefix}/UPDATE_USER_REQUEST`;
export const UPDATE_USER_SUCCESS = `${prefix}/UPDATE_USER_SUCCESS`;
export const UPDATE_USER_ERROR = `${prefix}/UPDATE_USER_ERROR`;
