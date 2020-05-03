/*
 *
 * DaywiseCalorieIntakeListContainer actions
 *
 */

import { DEFAULT_ACTION, FETCH_DAYWISE_CALORIE_INTAKE, FETCH_DAYWISE_CALORIE_INTAKE_SUCCESSFUL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchDaywiseCalorieIntake(token, fromTimeInMilliseconds, toTimeInMilliseconds) {
  return {
    type: FETCH_DAYWISE_CALORIE_INTAKE,
    payload: {
      token,
      fromTimeInMilliseconds,
      toTimeInMilliseconds
    }
  }
}

export function fetchDaywiseCalorieIntakeSuccessful(dailyCalorieIntake, calorieIntakeForUser) {
  return {
    type: FETCH_DAYWISE_CALORIE_INTAKE_SUCCESSFUL,
    payload: {
      dailyCalorieIntake, 
      calorieIntakeForUser
    }
  }
}