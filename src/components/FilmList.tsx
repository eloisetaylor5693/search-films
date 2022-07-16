import React, { useMemo, useState } from "react";
import { FilmResultsContext, GenreResultsContext } from "../templates/Search";
import { Film } from "../Film";
import "./FilmList.css";

function FilmList(): JSX.Element {
  const filmContextData = React.useContext(FilmResultsContext);
  const genreContextData = React.useContext(GenreResultsContext);
  const [genres, setGenres] = useState(["Genre"]);
  const [films, setFilms] = useState(filmContextData);

  useMemo(() => {
    setFilms(filmContextData);
    setGenres(genreContextData);
    console.log(genres);
  }, [filmContextData, genreContextData, genres]);

  return (
    <div className="container">
      {genres.map((genre: string) => {
        return (
          <div key={genre}>
            <h2 className="genre">{genre}</h2>

            <div className="film-list">
              {films
                .filter((x) => x.genres.includes(genre))
                .map((film: Film) => {
                  return (
                    <div key={film.id}>
                      <img
                        src={film.backdrop}
                        alt={`${film.title} poster`}
                        height="200px"
                        width="300px"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(FilmList);
