/**
 *
 * MealsListContainer
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMealsListContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import AddOrEditEntryModal from '../../components/AddOrEditEntryModal';
import { Button, FormGroup, Label, Table } from 'reactstrap';
import { createMeal, fetchMeals, updateMeal, deleteMeal } from './actions';
import makeSelectApp from '../App/selectors';
import DatePicker from "react-datepicker";
import MealtrackerModal from '../../components/MealtrackerModal';

export function MealsListContainer({ appContainer, mealsListContainer, createMeal, fetchMeals, updateMeal, deleteMeal }) {
  useInjectReducer({ key: 'mealsListContainer', reducer });
  useInjectSaga({ key: 'mealsListContainer', saga });

  var INITIAL_FROM_DATE = new Date();
  var INITIAL_TO_DATE = new Date();

  INITIAL_FROM_DATE.setHours(0);
  INITIAL_FROM_DATE.setMinutes(0);
  INITIAL_FROM_DATE.setSeconds(0);

  INITIAL_TO_DATE.setHours(23);
  INITIAL_TO_DATE.setMinutes(59);
  INITIAL_TO_DATE.setSeconds(59);

  const [fromDate, setFromDate] = useState(INITIAL_FROM_DATE);
  const [toDate, setToDate] = useState(INITIAL_TO_DATE);
  const [isAddEntryVisible, setIsAddEntryVisible] = useState(false);
  const [mealToEdit, setMealToEdit] = useState(null);
  const [mealToDelete, setMealToDelete] = useState(null);

  useEffect(() => {
    fetchMeals(appContainer.user.token, fromDate.getTime(), toDate.getTime());
  }, [fromDate, toDate]);

  return <div className="container mt-3">

    {
      isAddEntryVisible || mealToEdit ?
        <AddOrEditEntryModal
          mealToEdit={mealToEdit}
          onSaveClicked={(mealName, calories, timeInMilliseconds) => {
            if (!mealToEdit) {
              createMeal(appContainer.user.token, mealName, calories, timeInMilliseconds);
              setIsAddEntryVisible(false);
            } else {
              updateMeal(appContainer.user.token, mealToEdit.id, mealName, calories, timeInMilliseconds);
              setMealToEdit(null);
            }
          }}
          onCancelClicked={() => {
            setMealToEdit(null);
            setIsAddEntryVisible(false);
          }}
        />
        : ''
    }

    {
      mealToDelete ?
        <MealtrackerModal
          title={"Delete meal"}
          message={`Are you sure you want to delete ${mealToDelete.mealName}?`}
          onOkClicked={() => {
            deleteMeal(appContainer.user.token, mealToDelete.id);
            setMealToDelete(null);
          }}
          onCancelClicked={() => setMealToDelete(null)}
        />
        : ''
    }

    <div className="row">

      <div className="col-3">
        <Button onClick={() => setIsAddEntryVisible(true)} color="primary">Add Entry</Button>
      </div>


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
            setToDate(date);
          }}
        />
      </FormGroup>

      <div className="col-12">
        <Table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Meal</td>
              <td>Calories</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {
              mealsListContainer.meals.map(({ id, date, mealName, calories }) => {
                return <tr key={date}>
                  <td>{new Date(date).toDateString()}</td>
                  <td>{mealName}</td>
                  <td>{calories}</td>
                  <td>
                    <Button onClick={() => setMealToEdit({ id, date, mealName, calories })} className="p-0" color="link">Edit</Button>
                    <Button onClick={() => setMealToDelete({ id, date, mealName, calories })} className="ml-2 p-0 text-danger" color="link">Delete</Button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </div>

    </div>


  </div>;
}

MealsListContainer.propTypes = {
  createMeal: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mealsListContainer: makeSelectMealsListContainer(),
  appContainer: makeSelectApp()
});

function mapDispatchToProps(dispatch) {
  return {
    createMeal: (token, mealName, calories, timeInMilliseconds) => dispatch(createMeal(token, mealName, calories, timeInMilliseconds)),
    fetchMeals: (token, fromTimeInMilliseconds, toTimeInMilliseconds) => dispatch(fetchMeals(token, fromTimeInMilliseconds, toTimeInMilliseconds)),
    updateMeal: (token, mealId, mealName, calories, timeInMilliseconds) => dispatch(updateMeal(token, mealId, mealName, calories, timeInMilliseconds)),
    deleteMeal: (token, mealId) => dispatch(deleteMeal(token, mealId))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MealsListContainer);
