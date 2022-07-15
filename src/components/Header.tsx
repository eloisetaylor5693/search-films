import React from "react";
import SearchBar from "./SearchBar";
import './Header.css'

function Header(): JSX.Element {
  return (
    <header className="page-header">
      <h1 className="site-name">WOOKIE MOVIES</h1>
      <SearchBar />
    </header>
  );
}

export default Header;
