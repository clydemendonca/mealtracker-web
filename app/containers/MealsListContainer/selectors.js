import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mealsListContainer state domain
 */

const selectMealsListContainerDomain = state =>
  state.mealsListContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MealsListContainer
 */

const makeSelectMealsListContainer = () =>
  createSelector(
    selectMealsListContainerDomain,
    substate => substate,
  );

export default makeSelectMealsListContainer;
export { selectMealsListContainerDomain };
