import { combineReducers } from 'redux';
import defaultState from './default-state';
// import myReducers from './anywhere'

// add reducers here
export default combineReducers({
  default: () => defaultState,
});
