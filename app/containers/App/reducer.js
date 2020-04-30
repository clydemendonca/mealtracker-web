/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  user: {
    token: localStorage.getItem('token'),
    fullName: localStorage.getItem('fullName'),
    username: localStorage.getItem('username')
  }
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default appReducer;
