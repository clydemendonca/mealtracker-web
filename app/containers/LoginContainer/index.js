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

  const goToSignUpPage = () => goToRoute('/auth/sign-up');

  return <div className="login-form w-50">
    <h1 className="text-center">MyMealtracker</h1>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Username</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
    <div className="float-right">
      No account?
      <button onClick={() => goToSignUpPage()} type="button" className="btn btn-outline-primary ml-2">Sign Up</button>
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
