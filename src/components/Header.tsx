import React from "react";
import SearchBar from "./SearchBar";

function Header(): JSX.Element {
  return (
    <div>
      <h1>Wookie Movies</h1>
      <SearchBar/>
    </div>
  );
}

export default Header;
