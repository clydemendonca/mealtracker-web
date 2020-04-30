/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, HIDE_MODAL, SHOW_MODAL, SHOW_LOADING, HIDE_LOADING } from './constants';

export const initialState = {
  user: {
    token: localStorage.getItem('token'),
    fullName: localStorage.getItem('fullName'),
    username: localStorage.getItem('username')
  },
  modal: null,
  showLoadingModal: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case SHOW_MODAL:
        var { title, message, pathToRerouteWhenOkIsClicked } = action.payload;
        return {
          ...state,
          modal: {
            title,
            message,
            pathToRerouteWhenOkIsClicked
          }
        };

      case HIDE_MODAL:
        return {
          ...state,
          modal: null
        };

      case SHOW_LOADING:
        var { message } = action.payload;
        return {
          ...state,
          showLoadingModal: { message }
        };

      case HIDE_LOADING:
        return {
          ...state,
          showLoadingModal: null
        };

    }
  });

export default appReducer;
