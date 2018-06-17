import { combineReducers } from 'redux';
// Reducers
import { count } from './count';

const rootReducer = combineReducers({
  count
});

export default rootReducer;
