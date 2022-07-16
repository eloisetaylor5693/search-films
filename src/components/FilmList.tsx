import React, { useMemo, useState } from "react";
import { FilmResultsContext, GenreResultsContext } from "../templates/Search";
import "./FilmList.css";
import FilmGenreSection from "./FilmGenreSection";

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
        return <FilmGenreSection key={genre} filmList={films} genre={genre} />;
      })}
    </div>
  );
}

export default React.memo(FilmList);
