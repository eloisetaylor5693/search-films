import React, { useMemo, useState } from "react";
import { Film } from "../Film";
import FilmList from "../components/FilmList";
import Header from "../components/Header";
import { getAllGenresFromFilmList } from "../helpers/get-genres";
import { FilmResultsContext, GenreResultsContext } from "../helpers/Contexts";

function BrowseFilms(): JSX.Element {
  const [films, setFilms] = useState<Film[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    if (!loading) {
      return;
    }

    fetch("https://wookie.codesubmit.io/movies", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer Wookie2021",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.movies);

        const allGenres = getAllGenresFromFilmList(data.movies);
        setGenres(allGenres);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loading]);

  return (
    <FilmResultsContext.Provider value={films}>
      <Header />
      <GenreResultsContext.Provider value={genres}>
        <FilmList />
      </GenreResultsContext.Provider>
    </FilmResultsContext.Provider>
  );
}

export default BrowseFilms;
