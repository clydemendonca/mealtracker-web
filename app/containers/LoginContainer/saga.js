import { takeLatest, call, put, select } from 'redux-saga/effects';
import { showLoading, hideLoading, showModal } from '../App/actions';
import { API_BASE_URL } from '../../constants';
import { LOGIN } from './constants';
import { loginSuccessful } from './actions';

function login({ username, password }) {
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password
    })
  });
}

function* loginSaga({ payload }) {

  yield put(showLoading('Logging in...'));

  const response = yield login(payload);
  const responseData = yield response.json();

  yield put(hideLoading());

  console.log(response.status);
  if (response.status === 200) {
    const { token, username, fullName } = responseData.user;
    yield put(loginSuccessful(token, username, fullName));
  } else {
    yield put(showModal('Error', responseData.message));
  }

}

// Individual exports for testing
export default function* loginContainerSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN, loginSaga);
}
