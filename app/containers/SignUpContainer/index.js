/**
 *
 * SignUpContainer
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, Button } from 'reactstrap';
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
    if (username == "");
  };

  return <div className="sign-up-form w-50">
    <h1 className="text-center">MyMealtracker</h1>
    <FormGroup>
      <Label for="fullName">Full Name</Label>
      <Input value={fullName} onChange={(event) => setFullName(event.target.value)} type="text" id="fullName" />
    </FormGroup>
    <FormGroup>
      <Label for="username">Username</Label>
      <Input value={username} onChange={(event) => setUsername(event.target.value)}  type="text" id="username" />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input value={password} onChange={(event) => setPassword(event.target.value)}  type="password" id="password" />
    </FormGroup>
    <FormGroup>
      <Label for="confirmPassword">Confirm Password</Label>
      <Input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}  type="password" id="confirmPassword" />
    </FormGroup>
    <Button color="primary">Login</Button>
  </div>;
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
