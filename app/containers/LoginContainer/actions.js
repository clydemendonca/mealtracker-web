/*
 *
 * LoginContainer actions
 *
 */

import { DEFAULT_ACTION, LOGIN, LOGIN_SUCCESSFUL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


export function login(username, password) {
  return {
    type: LOGIN,
    payload: {
      username,
      password
    }
  };
}

export function loginSuccessful(token, username, fullName) {
  return {
    type: LOGIN_SUCCESSFUL,
    payload: {
      token,
      username,
      fullName
    }
  }
}