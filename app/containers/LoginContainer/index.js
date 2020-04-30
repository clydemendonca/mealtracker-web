/**
 *
 * LoginContainer
 *
 */

import React from 'react';
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
import { goToRoute } from '../App/actions';

export function LoginContainer({ goToRoute }) {
  useInjectReducer({ key: 'loginContainer', reducer });
  useInjectSaga({ key: 'loginContainer', saga });

  const onSignUpClicked = () => goToRoute('/auth/sign-up');

  return <div className="login-form w-50">
    <h1 className="text-center">MyMealtracker</h1>
    <FormGroup>
      <Label for="username">Username</Label>
      <Input type="text" name="text" id="username" />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input type="password" name="text" id="password" />
    </FormGroup>
    <Button color="primary">Login</Button>
    <div className="float-right">
      No account?
      <Button className="ml-3" onClick={() => onSignUpClicked()}  outline color="primary">Sign Up</Button>
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
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginContainer);
