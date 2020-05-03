/**
 *
 * DaywiseCalorieIntakeListContainer
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDaywiseCalorieIntakeListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchDaywiseCalorieIntake } from './actions';
import makeSelectApp from '../App/selectors';
import DatePicker from "react-datepicker";
import { Label, FormGroup } from 'reactstrap';


export function DaywiseCalorieIntakeListContainer({ appContainer, fetchDaywiseCalorieIntake }) {
  useInjectReducer({ key: 'daywiseCalorieIntakeListContainer', reducer });
  useInjectSaga({ key: 'daywiseCalorieIntakeListContainer', saga });

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  useEffect(() => {
    fetchDaywiseCalorieIntake(appContainer.user.token, fromDate.getTime(), toDate.getTime());
  }, [fromDate, toDate]);

  return <div className="container mt-3">

    <div className="row">
      <FormGroup className="col-3">
        <Label>From</Label>
        <DatePicker
          className="ml-2"
          dateFormat="dd-MM-yyyy"
          selected={fromDate}
          onChange={(date) => {
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            setFromDate(date);
          }}
        />
      </FormGroup>


      <FormGroup className="col-3">
        <Label>To</Label>
        <DatePicker
          className="ml-2"
          dateFormat="dd-MM-yyyy"
          selected={toDate}
          onChange={(date) => {
            date.setHours(23);
            date.setMinutes(59);
            date.setSeconds(59);
            setFromDate(date);
          }}
        />
      </FormGroup>
    </div>
  </div>;
}

DaywiseCalorieIntakeListContainer.propTypes = {
  fetchDaywiseCalorieIntake: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  daywiseCalorieIntakeListContainer: makeSelectDaywiseCalorieIntakeListContainer(),
  appContainer: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchDaywiseCalorieIntake: (token, fromTimeInMilliseconds, toTimeInMilliseconds) => dispatch(fetchDaywiseCalorieIntake(token, fromTimeInMilliseconds, toTimeInMilliseconds)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DaywiseCalorieIntakeListContainer);
