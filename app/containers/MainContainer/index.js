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
import reducer from './reducer';
import saga from './saga';

export function MainContainer() {
  useInjectReducer({ key: 'mainContainer', reducer });
  useInjectSaga({ key: 'mainContainer', saga });

  return <div />;
}

MainContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainContainer: makeSelectMainContainer(),
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
