import { combineReducers } from 'redux';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  authd: authenticationReducer
});

export default rootReducer;
