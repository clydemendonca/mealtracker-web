import { takeLatest, call, put, select } from 'redux-saga/effects';
import { API_BASE_URL } from '../../constants';
import { SIGN_UP } from './constants';
import { showLoading, hideLoading, showModal } from '../App/actions';

function signUp({ username, password, fullName }) {
  return fetch(`${API_BASE_URL}/auth/sign-up`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
      username,
      password,
      fullName
    })
  })
}

function* signUpSaga({ payload }) {

  yield put(showLoading('Signing up...'));
  
  const response = yield signUp(payload);
  const responseData = yield response.json();
  
  yield put(hideLoading());

  if(response.status !== 200) {
    yield put(showModal('Error', responseData.message));
  } else {
    yield put(showModal('Success', responseData.message, '/auth/login'));
  }

}

// Individual exports for testing
export default function* signUpContainerSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGN_UP, signUpSaga);
}
