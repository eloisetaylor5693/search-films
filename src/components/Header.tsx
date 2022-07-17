import React from "react";
import SearchBar from "./SearchBar";
import "./Header.css";

interface HeaderProps {
  handleSearchInput: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Header({ handleSearchInput }: HeaderProps): JSX.Element {
  return (
    <header className="page-header">
      <h1 className="site-name">WOOKIE MOVIES</h1>
      <SearchBar handleSearchInput={handleSearchInput} />
    </header>
  );
}

export default Header;
