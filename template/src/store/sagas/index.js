import { all } from 'redux-saga/effects';

import flightsSaga from './flights';

export default function* rootSaga() {
  yield all([flightsSaga()]);
}
