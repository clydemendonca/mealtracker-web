import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signUpContainer state domain
 */

const selectSignUpContainerDomain = state =>
  state.signUpContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignUpContainer
 */

const makeSelectSignUpContainer = () =>
  createSelector(
    selectSignUpContainerDomain,
    substate => substate,
  );

export default makeSelectSignUpContainer;
export { selectSignUpContainerDomain };
