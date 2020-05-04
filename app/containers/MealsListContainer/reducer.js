/*
 *
 * MealsListContainer reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, FETCH_MEALS_SUCCESSFUL } from './constants';

export const initialState = {
  meals: []
};

/* eslint-disable default-case, no-param-reassign */
const mealsListContainerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case FETCH_MEALS_SUCCESSFUL:
        const { meals } = action.payload;
        return {
          ...state,
          meals
        };
    }
  });

export default mealsListContainerReducer;
