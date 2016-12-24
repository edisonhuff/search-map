import React, { PropTypes } from 'react';

require('./styles.scss');

const SideBar = ({
  isOpen,
  onClick,
  setSidebarOpen,
  selectedPlace,
  places,
}) =>
  <div className={`sidebar ${isOpen ? '' : 'sidebar-hidden'}`}>
    { Number.isInteger(selectedPlace) ?
      <div className="container">
        <i
          className="fa fa-reply fa-large"
          onClick={() => onClick(null)}
        />
        <h3>
          {places[selectedPlace].label}
        </h3>
        <p>{places[selectedPlace].description}</p>
      </div>
      : <ul className="container">
        { places.map(({ label, description }, idx) =>
          <li
            key={idx}
            className={`${idx > 0 ? 'borderTop' : ''}`}
            onClick={() => onClick(idx)}
          >
            <h3>
              {`${idx + 1} ${label}`}
            </h3>
            <p>{`${description.slice(0, 80)}...`}</p>
          </li>,
        )}
      </ul>
    }
    <button
      className={places && places.length > 0 && 'persist'}
      onClick={() => setSidebarOpen(!isOpen)}
    >
      <i className={`fa fa-caret-${isOpen ? 'left' : 'right'} fa-lg`} />
    </button>
  </div>;

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
  })),
  onClick: PropTypes.func.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,

  selectedPlace: PropTypes.number,
};

export default SideBar;
