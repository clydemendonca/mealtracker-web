/**
 *
 * MealtrackerUserRoutes
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DaywiseCalorieIntakeListContainer from '../../containers/DaywiseCalorieIntakeListContainer';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MealtrackerUserRoutes() {
  return <Switch>
      <Redirect exact path="/main" to="/main/calories" />
      <Route path="/main/calories" component={DaywiseCalorieIntakeListContainer} />
    </Switch>;
}

MealtrackerUserRoutes.propTypes = {};

export default MealtrackerUserRoutes;
