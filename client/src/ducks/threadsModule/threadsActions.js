/**
 * Action Creators
 * */

import { CREATE_POST_REQUEST, CREATE_THREAD_REQUEST, FETCH_THREADS_BY_ID_REQUEST } from './threadsConstants';

export const fetchThreadsById = (meetupId, page = 1, init) => {
  const filter = {
    pageSize: 5,
    pageNum: page
  };
  return {
    type: FETCH_THREADS_BY_ID_REQUEST,
    payload: { meetupId, filter, init }
  };
};

export const createThread = (title, meetupId) => {
  return {
    type: CREATE_THREAD_REQUEST,
    payload: { title, meetupId }
  };
};

export const createPost = (text, threadId) => {
  return {
    type: CREATE_POST_REQUEST,
    payload: { text, threadId }
  };
};
