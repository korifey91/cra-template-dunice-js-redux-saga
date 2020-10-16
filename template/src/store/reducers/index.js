import { combineReducers } from '@reduxjs/toolkit';

import { reducer as flights } from './flights';

const rootReducer = combineReducers({
  flights,
});

export default rootReducer;
