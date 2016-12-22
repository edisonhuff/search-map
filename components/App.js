import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import SearchBar from './searchbar';
import MapWrapper from './map-wrapper';

import ACTION_CREATORS from '../actions'

require('./app.scss'); // for webpack to traverse the scss tree

const App = ({
  center,
  places,
  value,
  onChange,
  onSubmit,
}) => (
  <main id="AppContainer">
    <SearchBar
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onSubmit={(event) => onSubmit(event.target.value)}
    />
    <MapWrapper
      center={center}
      places={places}
    />
  </main>
);

function mapDispatchToProps(dispatch) {
  return {
    onChange: bindActionCreators(
      ACTION_CREATORS.SET_SEARCH_TERM,
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
  };
};

function mapStateToProps({
  center,
  isSidebarOpen,
  places,
  selectedPlace,
  searchTerm
}) {
  return {
    center,
    isSidebarOpen,
    places,
    selectedPlace,
    value: searchTerm,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
