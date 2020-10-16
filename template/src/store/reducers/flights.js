import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  chosenTrip: null,
  meta: {
    totalFlights: 0,
    totalPages: 0,
    page: 0,
  },
  filters: {
    origin: 'PIT',
    destination: 'EWR',
    leaveDate: '2020-12-12',
    returnDate: '2020-12-14',
    numberOfAdults: 1,
    numberOfChildren: 0,
    sortBy: 'price',
  },
};

const flights = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    fetchFlights(state) {
      return {
        ...state,
        data: [],
        isLoading: true,
        error: null,
      };
    },
    fetchFlightsSuccess(state, action) {
      const { data, meta } = action.payload;
      return {
        ...state,
        data,
        meta,
        isLoading: false,
        error: null,
      };
    },
    fetchFlightsError(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    goToTrip(state, action) {
      return {
        ...state,
        chosenTrip: action.payload,
      };
    },
    setFilter(state, action) {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    },
  },
});

export const { actions, reducer } = flights;
export const { fetchFlights, fetchFlightsSuccess, fetchFlightsError, goToTrip, setFilter } = actions;
