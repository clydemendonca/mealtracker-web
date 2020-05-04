/**
 *
 * MealtrackerUserRoutes
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DaywiseCalorieIntakeListContainer from '../../containers/DaywiseCalorieIntakeListContainer';
import MealsListContainer from '../../containers/MealsListContainer';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MealtrackerUserRoutes() {
  return <Switch>
      <Route path="/main/calories" component={DaywiseCalorieIntakeListContainer} />
      <Route path="/main/meals" component={MealsListContainer} />
    </Switch>;
}

MealtrackerUserRoutes.propTypes = {};

export default MealtrackerUserRoutes;
