import React, { PropTypes } from 'react';

require('./styles.scss');

const SearchBar = ({
  value,
  onChange,
  onSubmit,
  liveResults,
}) =>
  <form
    className={`searchBar ${value ? '' : 'highlight'}`}
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
    {liveResults.length > 0 &&
      <ul>
        {liveResults.map((result, i) =>
          <li key={i}>
            {result}
          </li>
        )}
      </ul>
    }
  </form>;

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,

  liveResults: PropTypes.arrayOf(PropTypes.string),
};

export default SearchBar;
