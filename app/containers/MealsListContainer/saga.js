import { takeLatest, call, put, select } from 'redux-saga/effects';
import { showLoading, hideLoading, showModal } from '../App/actions';
import { CREATE_MEAL, FETCH_MEALS, UPDATE_MEAL, DELETE_MEAL } from './constants';
import { API_BASE_URL } from '../../constants';
import { fetchMealsSuccessful } from './actions';

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

function* createMealSaga({ payload }) {

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

function fetchMeals({token, fromTimeInMilliseconds, toTimeInMilliseconds}) {
  return fetch(`${API_BASE_URL}/meals?from=${fromTimeInMilliseconds}&to=${toTimeInMilliseconds}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
}

function* fetchMealsSaga({ payload }) {

  yield put(showLoading('Fetch entries...'));

  const response = yield fetchMeals(payload);
  const responseData = yield response.json();

  yield put(hideLoading());

  console.log(response.status);
  if (response.status === 200) {
    const { meals } = responseData;
    yield put(fetchMealsSuccessful(meals));
  } else {
    yield put(showModal('Error', responseData.message));
  }

}

function updateMeal({ token, mealId, mealName, calories, timeInMilliseconds }) {
  return fetch(`${API_BASE_URL}/meals/${mealId}`, {
    method: 'PUT',
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

function* updateMealSaga({ payload }) {

  yield put(showLoading('Updating entry...'));

  const response = yield updateMeal(payload);
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


function deleteMeal({ token, mealId }) {
  return fetch(`${API_BASE_URL}/meals/${mealId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }) 
}

function* deleteMealSaga({ payload }) {

  yield put(showLoading('Deleting entry...'));

  const response = yield deleteMeal(payload);
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
  yield takeLatest(FETCH_MEALS, fetchMealsSaga);
  yield takeLatest(UPDATE_MEAL, updateMealSaga);
  yield takeLatest(DELETE_MEAL, deleteMealSaga);
}
