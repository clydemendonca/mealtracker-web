/**
 *
 * DaywiseCalorieIntakeList
 *
 */

import React from 'react';
import CalorieIntakeForUser from '../CalorieIntakeForUser';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function DaywiseCalorieIntakeList({ daywiseCalorieIntakeForUser }) {
  return <div className="row">
    {
      daywiseCalorieIntakeForUser.map(({ dateString, total, isTotalLessThanDailyCalorieIntake }) => <CalorieIntakeForUser key={dateString} dateString={dateString} total={total} isTotalLessThanDailyCalorieIntake={isTotalLessThanDailyCalorieIntake} />)
    }
  </div>;
}

DaywiseCalorieIntakeList.propTypes = {};

export default DaywiseCalorieIntakeList;
