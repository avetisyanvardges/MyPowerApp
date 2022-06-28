import {all, takeLatest} from 'redux-saga/effects';
import {LOGIN_REQUEST, RATE_LESSON} from '../../types/USER_ACTIONS';
import {login} from './User/login';
import {rate} from './Lessons/rate';

function* actionWatcher() {
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(RATE_LESSON, rate);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
