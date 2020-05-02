/**
 *
 * LoginContainer
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
import { goToRoute, showModal } from '../App/actions';
import { login } from './actions';

export function LoginContainer({ goToRoute, login, showModal }) {
  useInjectReducer({ key: 'loginContainer', reducer });
  useInjectSaga({ key: 'loginContainer', saga });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClicked = () => {
    if(username === '') showModal('Error', 'Username is a required field');
    if(password === '') showModal('Error', 'Password is a required field');
    login(username, password);
  }

  const onSignUpClicked = () => goToRoute('/auth/sign-up');

  return <div className="login-form w-50">
    <h1 className="text-center">MyMealtracker</h1>
    <FormGroup>
      <Label for="username">Username</Label>
      <Input value={username} onChange={(event) => setUsername(event.target.value)} type="text" name="text" id="username" />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="text" id="password" />
    </FormGroup>
    <Button onClick={() => onLoginClicked()} color="primary">Login</Button>
    <div className="float-right">
      No account?
      <Button className="ml-3" onClick={() => onSignUpClicked()} outline color="primary">Sign Up</Button>
    </div>
  </div>;
}

LoginContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginContainer: makeSelectLoginContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    goToRoute: (path) => dispatch(goToRoute(path)),
    login: (username, password) => dispatch(login(username, password)),
    showModal: (title, message) => dispatch(showModal(title, message))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginContainer);
