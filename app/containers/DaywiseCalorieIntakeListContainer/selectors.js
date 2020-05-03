import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the daywiseCalorieIntakeListContainer state domain
 */

const selectDaywiseCalorieIntakeListContainerDomain = state =>
  state.daywiseCalorieIntakeListContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DaywiseCalorieIntakeListContainer
 */

const makeSelectDaywiseCalorieIntakeListContainer = () =>
  createSelector(
    selectDaywiseCalorieIntakeListContainerDomain,
    substate => substate,
  );

export default makeSelectDaywiseCalorieIntakeListContainer;
export { selectDaywiseCalorieIntakeListContainerDomain };
