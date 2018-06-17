import {
  createStore,
  compose
} from 'redux';
import rootReducer from '../reducers/rootReducer';

const initialState = {};
const enhancers = [];

if(process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(...enhancers);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
