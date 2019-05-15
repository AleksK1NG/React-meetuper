/**
 * Action Creators
 * */

import {
  CREATE_MEETUP_REQUEST,
  FETCH_ALL_REQUEST,
  FETCH_MEETUP_BY_ID,
  JOIN_MEETUP_REQUEST,
  LEAVE_MEETUP_REQUEST,
  UPDATE_MEETUP_REQUEST
} from './meetupsConstants';

export const fetchAllMeetups = (options = {}) => {
  return {
    type: FETCH_ALL_REQUEST,
    payload: { options }
  };
};

export const fetchMeetupById = (meetupId) => {
  return {
    type: FETCH_MEETUP_BY_ID,
    payload: { meetupId }
  };
};

export const createMeetup = (meetup) => {
  return {
    type: CREATE_MEETUP_REQUEST,
    payload: { meetup }
  };
};

export const joinMeetup = (meetupId) => {
  return {
    type: JOIN_MEETUP_REQUEST,
    payload: { meetupId }
  };
};

export const leaveMeetup = (meetupId) => {
  return {
    type: LEAVE_MEETUP_REQUEST,
    payload: { meetupId }
  };
};

export const updateMeetup = (meetupData) => {
  meetupData.processedLocation = meetupData.location
    .toLowerCase()
    .replace(/[\s,]+/g, '')
    .trim();
  return {
    type: UPDATE_MEETUP_REQUEST,
    payload: { meetupData }
  };
};
