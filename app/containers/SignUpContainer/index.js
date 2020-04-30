/**
 *
 * SignUpContainer
 *
 */

import React, { useState } from 'react';
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

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSignUpClicked = () => {
    if(username == "") ;
  };

  return <div className="sign-up-form w-50">
    <h1 className="text-center">MyMealtracker</h1>
    <div className="form-group mt-2">
      <label htmlFor="fullName">Full Name</label>
      <input value={fullName} onChange={(event) => setFullName(event.target.value)} type="text" className="form-control" id="fullName" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" className="form-control" id="username" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="form-control" id="password" />
    </div>
    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" className="form-control" id="confirmPassword" />
    </div>
    <button onClick={() => onSignUpClicked()} type="button" className="btn btn-primary">Sign Up</button>
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
