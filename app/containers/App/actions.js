/*
 *
 * App actions
 *
 */

import { DEFAULT_ACTION, GO_TO_ROUTE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function goToRoute(path) {
  return {
    type: GO_TO_ROUTE,
    payload: {
      path
    }
  }
}