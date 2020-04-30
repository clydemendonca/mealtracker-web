/**
 *
 * App
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectApp from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Switch, Route } from 'react-router-dom';

import LoginContainer from '../LoginContainer';
import MainContainer from '../MainContainer';
import SignUpContainer from '../SignUpContainer';

import { goToRoute } from './actions';

export function App({ app, goToRoute }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    if (!app.user.token) {
      goToRoute('/auth/login');
    } else {
      goToRoute('/main');
    }
  }, []);

  return <Switch>
    <Route path="/auth/login" component={LoginContainer} />
    <Route path="/auth/sign-up" component={SignUpContainer} />
    <Route path="/main" component={MainContainer} />
  </Switch>;
}

App.propTypes = {
  goToRoute: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
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

export default compose(withConnect)(App);
