import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  return (
    <input id="search-bar"
     key="random1"
     value={keyword}
     placeholder={"Find restaurant..."}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar
