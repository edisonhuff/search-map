import React, { PropTypes } from 'react';
import {
  GoogleMapLoader,
  GoogleMap,
  Marker,
} from 'react-google-maps';

require('./styles.scss');

const MapWrapper = ({ center, places }) =>
  <GoogleMapLoader
    containerElement={<div style={{ height: '100%' }} />}
    googleMapElement={
      <GoogleMap
        defaultZoom={16}
        defaultCenter={center}
      >
        {places && places.map((place, idx) =>
          <Marker
            {...place}
            key={idx}
          />,
        )}
      </GoogleMap>
    }
  />;

MapWrapper.propTypes = {
  center: PropTypes.shape({
    position: PropTypes.shape({
      lat: PropTypes.number,
      long: PropTypes.number,
    }),
  }),
  places: PropTypes.arrayOf(PropTypes.object),
};

export default MapWrapper;
