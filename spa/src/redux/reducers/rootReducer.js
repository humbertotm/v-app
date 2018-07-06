import { combineReducers } from 'redux';
// Reducers
import { reducer as formReducer } from 'redux-form';
import { count } from './count';

const rootReducer = combineReducers({
  count,
  form: formReducer
});

export default rootReducer;
