/*
 *
 * MealsListContainer actions
 *
 */

import { DEFAULT_ACTION, CREATE_MEAL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function createMeal(token, mealName, calories, timeInMilliseconds) {
  return {
    type: CREATE_MEAL,
    payload: {
      token,
      mealName,
      calories,
      timeInMilliseconds
    }
  }
}