import React from "react";
import { ReactComponent as SpyGlass } from "../images/spyglass.svg";
import "./SearchBar.css";

interface SearchBarProps {
  handleSearchInput: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function SearchBar({ handleSearchInput }: SearchBarProps): JSX.Element {
  return (
    <div className="search-bar">
      <SpyGlass />
      <input type="text" id="search-bar" onKeyPress={handleSearchInput} />
    </div>
  );
}

export default SearchBar;
