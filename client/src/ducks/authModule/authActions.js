/**
 * Action Creators
 * */

import {
  LOAD_USER_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
  SIGN_UP_REQUEST,
  UPDATE_USER_REQUEST
} from './authConstants';

export const registerUser = (userData) => {
  return {
    type: SIGN_UP_REQUEST,
    payload: { userData }
  };
};

export const loginUser = (userData) => {
  return {
    type: SIGN_IN_REQUEST,
    payload: { userData }
  };
};

export const logoutUser = () => {
  localStorage.removeItem('react-meetuper');
  return {
    type: SIGN_OUT_REQUEST
  };
};

export const loadUser = () => {
  return {
    type: LOAD_USER_REQUEST
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: { user }
  };
};
