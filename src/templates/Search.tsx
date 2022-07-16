import React, { useMemo, useState } from "react";
import { Film } from "../Film";
import FilmList from "../components/FilmList";
import Header from "../components/Header";

export const FilmResultsContext = React.createContext<Film[]>([]);
export const GenreResultsContext = React.createContext<string[]>([]);

const getGenres = (films: Film[]): string[] => {
  const allGenres: string[] = [];
  films.forEach((x: Film) =>
    x.genres.forEach((y: string) => allGenres.push(y))
  );
  const distinctGenres = Array.from(new Set(allGenres)).sort();
  return distinctGenres;
};

function Search(): JSX.Element {
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

        const allGenres = getGenres(data.movies);
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

export default Search;
