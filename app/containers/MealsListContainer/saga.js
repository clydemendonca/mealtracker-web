import { takeLatest, call, put, select } from 'redux-saga/effects';
import { showLoading, hideLoading, showModal } from '../App/actions';
import { CREATE_MEAL } from './constants';
import { API_BASE_URL } from '../../constants';

function createMeal({ token, mealName, calories, timeInMilliseconds }) {
  return fetch(`${API_BASE_URL}/meals`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mealName,
      calories,
      timeInMilliseconds
    })
  })
}

function* createMealSaga({payload}) {

  yield put(showLoading('Adding entry...'));

  const response = yield createMeal(payload);
  const responseData = yield response.json();

  yield put(hideLoading());

  console.log(response.status);
  if (response.status === 200) {
    // yield put(loginSuccessful(token, username, fullName, role));
    yield put(showModal('Success', responseData.message, '/main/calories'));
  } else {
    yield put(showModal('Error', responseData.message));
  }

}

// Individual exports for testing
export default function* mealsListContainerSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(CREATE_MEAL, createMealSaga);
}
