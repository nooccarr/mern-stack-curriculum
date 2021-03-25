import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer.js';

// make an errors reducer to handle all of errors

export default combineReducers({
  session: SessionErrorsReducer
});