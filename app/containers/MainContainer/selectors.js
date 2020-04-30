import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainContainer state domain
 */

const selectMainContainerDomain = state => state.mainContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainContainer
 */

const makeSelectMainContainer = () =>
  createSelector(
    selectMainContainerDomain,
    substate => substate,
  );

export default makeSelectMainContainer;
export { selectMainContainerDomain };
