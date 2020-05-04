/**
 *
 * MealsListContainer
 *
 */

import React, { useState } from 'react';
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
import { Button } from 'reactstrap';
import { createMeal } from './actions';
import makeSelectApp from '../App/selectors';

export function MealsListContainer({ appContainer, createMeal }) {
  useInjectReducer({ key: 'mealsListContainer', reducer });
  useInjectSaga({ key: 'mealsListContainer', saga });

  const [isAddEntryVisible, setIsAddEntryVisible] = useState(true);

  return <div className="container mt-3">

    {
      isAddEntryVisible ?
        <AddOrEditEntryModal
          onSaveClicked={(mealName, calories, timeInMilliseconds) => {
            createMeal(appContainer.user.token, mealName, calories, timeInMilliseconds);
            setIsAddEntryVisible(false);
          }}
          onCancelClicked={() => setIsAddEntryVisible(false)}
        />
        : ''
    }

    <div className="row">

      <div className="col-3">
        <Button onClick={() => setIsAddEntryVisible(true)} color="primary">Add Entry</Button>
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
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MealsListContainer);
