import React, { PropTypes } from 'react';

require('./styles.scss');

const SearchBar = ({
  value,
  onChange,
  onSubmit,
}) =>
  <form
    className="searchBar"
    onSubmit={onSubmit}
  >
    <input
      onChange={onChange}
      placeholder={'search for locations here'}
      value={value}
    />
    <button
      type={'submit'}
    >
      <i className="fa fa-search fa-2" />
    </button>
  </form>;

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SearchBar;
