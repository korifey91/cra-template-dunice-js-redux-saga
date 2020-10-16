import { takeLatest, call, put, select } from 'redux-saga/effects';
import qs from 'qs';

import axios from '../axiosConfig';
import { fetchFlights, fetchFlightsError, fetchFlightsSuccess } from '../reducers/flights';

function* getFlights(action) {
  try {
    const { payload: page } = action;
    const filters = yield select((state) => state.flights.filters);
    const query = qs.stringify({
      ...filters,
      page,
    });
    const config = {
      method: 'get',
      url: `/getflights?${query}`,
    };
    const flights = yield call(axios, config);
    if (flights.data) {
      yield put(
        fetchFlightsSuccess({
          data: flights.data.legs,
          meta: {
            totalFlights: flights.data.totalFlights,
            totalPages: flights.data.totalPages,
            page,
          },
        })
      );
    } else throw new Error();
  } catch (e) {
    yield put(fetchFlightsError('Cannot fetch flights with such filters'));
  }
}

function* flightsSaga() {
  yield takeLatest(fetchFlights.toString(), getFlights);
}

export default flightsSaga;
