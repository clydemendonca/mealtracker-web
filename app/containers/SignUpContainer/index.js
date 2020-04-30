/**
 *
 * SignUpContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSignUpContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

import './style.css';

export function SignUpContainer() {
  useInjectReducer({ key: 'signUpContainer', reducer });
  useInjectSaga({ key: 'signUpContainer', saga });

  return <div className="sign-up-form w-50">
  <h1 className="text-center">MyMealtracker</h1>
  <div className="form-group">
    <label htmlFor="fullName">Full Name</label>
    <input type="text" className="form-control" id="fullName" aria-describedby="emailHelp" />
  </div>
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" />
  </div>
  <div className="form-group">
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type="password" className="form-control" id="confirmPassword" />
  </div>
  <button type="button" className="btn btn-primary">Sign Up</button>
</div>;;
}

SignUpContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signUpContainer: makeSelectSignUpContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignUpContainer);
