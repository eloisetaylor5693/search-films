import React from "react";
import { FilmResultsContext } from "../templates/Search";
import { Film } from "../Film";
import "./FilmList.css";

function FilmList(): JSX.Element {
  const contextData = React.useContext(FilmResultsContext);

  return (
    <div className="film-list">
      {contextData.map((film: Film) => {
        return (
          <div key={film.id}>

            <img src={film.backdrop} alt={`${film.title} poster`} height="300px"/>
          </div>
        );
      })}
    </div>
  );
}

export default FilmList;
