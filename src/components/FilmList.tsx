import React from "react";
import { FilmResultsContext } from "../templates/Search";
import { Film } from "../Film";

function FilmList(): JSX.Element {
  const contextData = React.useContext(FilmResultsContext);

  return (
    <div>
      {contextData.map((film: Film) => {
        return (
          <div key={film.id}>
            <h2>{film.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default FilmList;
