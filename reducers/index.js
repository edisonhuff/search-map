import { combineReducers } from 'redux';
import searchbar from './searchbar';
import sidebar from './sidebar';
import map from './map';
import places from './places';

// add reducers here
export default combineReducers({
  searchbar,
  sidebar,
  map,
  places,
});
