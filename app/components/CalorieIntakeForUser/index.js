/**
 *
 * CalorieIntakeForUser
 *
 */

import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CalorieIntakeForUser({ dateString, total, isTotalLessThanDailyCalorieIntake }) {
  return <Card className="col-4">
  <CardBody>
    <h4>{dateString}</h4>
    <h1 className={ isTotalLessThanDailyCalorieIntake ? "text-success" : "text-danger" }>{total}</h1>
    calories
  </CardBody>
</Card>;
}

CalorieIntakeForUser.propTypes = {};

export default CalorieIntakeForUser;
