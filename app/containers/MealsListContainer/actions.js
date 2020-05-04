/*
 *
 * MealsListContainer actions
 *
 */

import { DEFAULT_ACTION, CREATE_MEAL, FETCH_MEALS, FETCH_MEALS_SUCCESSFUL, UPDATE_MEAL } from './constants';

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

export function fetchMeals(token, fromTimeInMilliseconds, toTimeInMilliseconds) {
  return {
    type: FETCH_MEALS,
    payload: {
      token,
      fromTimeInMilliseconds,
      toTimeInMilliseconds
    }
  }
}


export function fetchMealsSuccessful(meals) {
  return {
    type: FETCH_MEALS_SUCCESSFUL,
    payload: {
      meals
    }
  }
}

export function updateMeal(token, mealId, mealName, calories, timeInMilliseconds) {
  return {
    type: UPDATE_MEAL,
    payload: {
      token,
      mealId,
      mealName,
      calories,
      timeInMilliseconds
    }
  }
}