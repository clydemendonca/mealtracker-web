import { takeLatest, call, put, select } from 'redux-saga/effects';
import { FETCH_DAYWISE_CALORIE_INTAKE } from './constants';
import { showLoading, hideLoading } from '../App/actions';
import { API_BASE_URL } from '../../constants';
import { fetchDaywiseCalorieIntakeSuccessful } from './actions';

function fetchDaywiseCalorieIntake({ token, fromTimeInMilliseconds, toTimeInMilliseconds }) {
  return fetch(`${API_BASE_URL}/meals/daywise?from=${fromTimeInMilliseconds}&to=${toTimeInMilliseconds}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}

function* fetchDaywiseCalorieIntakeSaga(action) {

  yield put(showLoading("Fetching data..."));

  const response = yield fetchDaywiseCalorieIntake(action.payload);
  const responseData = yield response.json();

  yield put(hideLoading());

  if(response.status === 200) {
    const {dailyCalorieIntake, calorieIntakeForUser} = responseData;
    yield put(fetchDaywiseCalorieIntakeSuccessful(dailyCalorieIntake, calorieIntakeForUser));
  } else {
    yield put(showModal('Error', responseData.message));
  }

}

// Individual exports for testing
export default function* daywiseCalorieIntakeListContainerSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FETCH_DAYWISE_CALORIE_INTAKE, fetchDaywiseCalorieIntakeSaga)
}
