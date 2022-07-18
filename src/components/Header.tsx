import React from "react";
import SearchBar from "./SearchBar";
import "./Header.css";
import { Link } from "react-router-dom";

interface HeaderProps {
  handleSearchInput: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Header({ handleSearchInput }: HeaderProps): JSX.Element {
  return (
    <header className="page-header">
      <Link to="/">
        <h1 className="site-name">WOOKIE MOVIES</h1>
      </Link>

      <SearchBar handleSearchInput={handleSearchInput} />
    </header>
  );
}

export default Header;
