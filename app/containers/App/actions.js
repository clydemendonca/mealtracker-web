/*
 *
 * App actions
 *
 */

import { DEFAULT_ACTION, GO_TO_ROUTE, HIDE_MODAL, SHOW_MODAL, SHOW_LOADING, HIDE_LOADING } from './constants';
import { func } from 'prop-types';

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

export function showModal(title, message, pathToRerouteWhenOkIsClicked) {
  return {
    type: SHOW_MODAL,
    payload: {
      title, message, pathToRerouteWhenOkIsClicked
    }
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  }
}

export function showLoading(message) {
  return {
    type: SHOW_LOADING,
    payload: {
      message
    }
  }
}

export function hideLoading() {
  return {
    type: HIDE_LOADING,
  }
}