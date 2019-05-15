import { appName } from '../../config';

export const moduleName = 'meetups';
const prefix = `${appName}/${moduleName}`;

/*
 * Constants
 * */
export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`;

export const FETCH_MEETUPS_REQUEST = `${prefix}/FETCH_MEETUPS_REQUEST`;
export const FETCH_MEETUPS_SUCCESS = `${prefix}/FETCH_MEETUPS_SUCCESS`;
export const FETCH_MEETUPS_ERROR = `${prefix}/FETCH_MEETUPS_ERROR`;

export const FETCH_MEETUP_BY_ID = `${prefix}/FETCH_MEETUP_BY_ID`;
export const FETCH_MEETUP_BY_ID_REQUEST = `${prefix}/FETCH_MEETUP_BY_ID_REQUEST`;
export const FETCH_MEETUP_BY_ID_SUCCESS = `${prefix}/FETCH_MEETUP_BY_ID_SUCCESS`;
export const FETCH_MEETUP_BY_ID_ERROR = `${prefix}/FETCH_MEETUP_BY_ID_ERROR`;

export const CREATE_MEETUP_REQUEST = `${prefix}/CREATE_MEETUP_REQUEST`;
export const CREATE_MEETUP_SUCCESS = `${prefix}/CREATE_MEETUP_SUCCESS`;
export const CREATE_MEETUP_ERROR = `${prefix}/CREATE_MEETUP_ERROR`;

export const JOIN_MEETUP_REQUEST = `${prefix}/JOIN_MEETUP_REQUEST`;
export const JOIN_MEETUP_SUCCESS = `${prefix}/JOIN_MEETUP_SUCCESS`;
export const JOIN_MEETUP_ERROR = `${prefix}/JOIN_MEETUP_ERROR`;

export const LEAVE_MEETUP_REQUEST = `${prefix}/LEAVE_MEETUP_REQUEST`;
export const LEAVE_MEETUP_SUCCESS = `${prefix}/LEAVE_MEETUP_SUCCESS`;
export const LEAVE_MEETUP_ERROR = `${prefix}/LEAVE_MEETUP_ERROR`;

export const UPDATE_MEETUP_REQUEST = `${prefix}/UPDATE_MEETUP_REQUEST`;
export const UPDATE_MEETUP_SUCCESS = `${prefix}/UPDATE_MEETUP_SUCCESS`;
export const UPDATE_MEETUP_ERROR = `${prefix}/UPDATE_MEETUP_ERROR`;
