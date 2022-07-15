import React from "react";
import { FilmResultsContext } from "./Search";
import { Film } from "../Film";

function FilmList(): JSX.Element {
  const contextData = React.useContext(FilmResultsContext);

  return (
    <div>
      {contextData.map((film: Film) => {
        return (
          <div key={film.id}>
            <h1>{film.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default FilmList;
