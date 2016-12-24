import React from 'react';
import {
  SearchBar,
  SideBar,
  MapWrapper,
} from './containers';

require('./app.scss'); // for webpack to traverse the scss tree

const App = () => (
  <main id="AppContainer">
    <SearchBar />
    <SideBar />
    <MapWrapper />
  </main>
);

export default App;
