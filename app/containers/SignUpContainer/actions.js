/*
 *
 * SignUpContainer actions
 *
 */

import { DEFAULT_ACTION, SIGN_UP } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function signUp(fullName, username, password) {
  return {
    type: SIGN_UP,
    payload: {
      fullName,
      username,
      password
    }
  }
}