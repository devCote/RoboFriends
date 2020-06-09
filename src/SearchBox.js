import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="ma4">
      <input
        className="f3 pa2 b--green bg-light-green"
        type="search"
        placeholder="search monsters"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
