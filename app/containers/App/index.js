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

import { goToRoute, hideModal } from './actions';
import MealtrackerModal from '../../components/MealtrackerModal';
import LoadingModal from '../../components/LoadingModal';

export function App({ app, goToRoute, hideModal }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    if (!app.user.token) {
      goToRoute('/auth/login');
    } else {
      goToRoute('/main');
    }
  }, []);


  return <div>

    {
      app.showLoadingModal ?
        <LoadingModal message={app.showLoadingModal.message} />
        : ''
    }

    {app.modal ?
      <MealtrackerModal
        title={app.modal.title}
        message={app.modal.message}
        onOkClicked={() => {
          if (app.modal.pathToRerouteWhenOkIsClicked)
            goToRoute(app.modal.pathToRerouteWhenOkIsClicked);

          hideModal();
        }}
      />
      : ''}
    <Switch>
      <Route path="/auth/login" component={LoginContainer} />
      <Route path="/auth/sign-up" component={SignUpContainer} />
      <Route path="/main" component={MainContainer} />
    </Switch>
  </div>;
}

App.propTypes = {
  goToRoute: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    goToRoute: (path) => dispatch(goToRoute(path)),
    hideModal: () => dispatch(hideModal()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
