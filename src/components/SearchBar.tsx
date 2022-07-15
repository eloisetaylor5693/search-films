import React from "react";
import { ReactComponent as SpyGlass } from '../images/spyglass.svg';
import './SearchBar.css'

function SearchBar(): JSX.Element {
  return (
    <div className="search-bar">
      <SpyGlass/>
      <input type="text" id="search-bar"/>
    </div>
  );
}

export default SearchBar;
