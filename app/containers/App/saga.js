import { takeLatest, call, put, select } from 'redux-saga/effects';
import { GO_TO_ROUTE } from './constants';
import { push } from 'connected-react-router';

function* goToRouteSaga({ payload }) {
  const { path } = payload;
  console.log(path);
  yield put(push(path));
}

// Individual exports for testing
export default function* appSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GO_TO_ROUTE, goToRouteSaga);
}
