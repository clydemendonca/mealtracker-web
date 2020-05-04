/**
 *
 * MainContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMainContainer from './selectors';
import makeSelectAppContainer from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import MealtrackerNavbar from '../../components/MealtrackerNavbar';
import MealtrackerUserRoutes from '../../components/MealtrackerUserRoutes';
import MealtrackerAdminRoutes from '../../components/MealtrackerAdminRoutes';
import { goToRoute } from '../App/actions';

export function MainContainer({ appContainer, goToRoute }) {
  useInjectReducer({ key: 'mainContainer', reducer });
  useInjectSaga({ key: 'mainContainer', saga });

  return <div>
    <MealtrackerNavbar fullName={appContainer.user.fullName} goToRoute={(path) => goToRoute(path) }  />

    {
      appContainer.user.role === 'ADMIN' ?
        <MealtrackerAdminRoutes />
        : <MealtrackerUserRoutes />
    }

  </div>;
}

MainContainer.propTypes = {
  goToRoute: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainContainer: makeSelectMainContainer(),
  appContainer: makeSelectAppContainer()
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

export default compose(withConnect)(MainContainer);
