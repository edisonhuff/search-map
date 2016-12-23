import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from './searchbar';
import MapWrapper from './map-wrapper';

import ACTION_CREATORS from '../actions';

require('./app.scss'); // for webpack to traverse the scss tree

const App = ({
  searchbar,
  sidebar,
  map,
 }) => (
  <main id="AppContainer">
    <SearchBar
      value={value}
      liveResults={liveResults}
      onChange={(event) => onChange(event.target.value)}
      onSubmit={(event) => onSubmit(event.target.value)}
    />
    <MapWrapper
      {...map}
    />
  </main>
);

App.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  places: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  liveResults: PropTypes.arrayOf(PropTypes.string),
};

const mapDispatchToProps = dispatch => ({
  onChange: bindActionCreators(
    ACTION_CREATORS.SET_SEARCH_VALUE,
    dispatch
  ),
  onSubmit: bindActionCreators(
    ACTION_CREATORS.GET_SEARCH_RESULTS,
    dispatch
  ),
  setSideBarOpen: bindActionCreators(
    ACTION_CREATORS.SET_SIDEBAR_OPEN,
    dispatch
  ),
});

export default connect(state => state, mapDispatchToProps)(App);
