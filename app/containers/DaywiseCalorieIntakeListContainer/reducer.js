/*
 *
 * DaywiseCalorieIntakeListContainer reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, FETCH_DAYWISE_CALORIE_INTAKE_SUCCESSFUL } from './constants';

export const initialState = {
  daywiseCalorieIntakeForUser: []
};

/* eslint-disable default-case, no-param-reassign */
const daywiseCalorieIntakeListContainerReducer = (
  state = initialState,
  action,
) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;


      case FETCH_DAYWISE_CALORIE_INTAKE_SUCCESSFUL:
        const { dailyCalorieIntake, calorieIntakeForUser } = action.payload;

        const daywiseCalorieIntakeForUser = calorieIntakeForUser.map((item) => {
          return {
            ...item,
            isDailyGoalMet: item.calories >= dailyCalorieIntake
          }
        });

        return {
          ...state,
          daywiseCalorieIntakeForUser,
        }

    }
  });

export default daywiseCalorieIntakeListContainerReducer;
