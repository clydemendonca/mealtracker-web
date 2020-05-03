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

export function MainContainer({ appContainer }) {
  useInjectReducer({ key: 'mainContainer', reducer });
  useInjectSaga({ key: 'mainContainer', saga });

  return <div>
    <MealtrackerNavbar fullName={appContainer.user.fullName} />

    {
      appContainer.user.role === 'ADMIN' ?
        <MealtrackerAdminRoutes />
        : <MealtrackerUserRoutes />
    }

  </div>;
}

MainContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainContainer: makeSelectMainContainer(),
  appContainer: makeSelectAppContainer()
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

export default compose(withConnect)(MainContainer);
