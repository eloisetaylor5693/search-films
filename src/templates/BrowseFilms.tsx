import React, { useEffect, useState } from "react";
import { Film } from "../Film";
import FilmList from "../components/FilmList";
import Header from "../components/Header";
import {
  CurrentSearchContext,
  FilmResultsContext,
  GenreResultsContext,
} from "../helpers/Contexts";
import { SearchFilms } from "../helpers/SearchFilms";

function BrowseFilms(): JSX.Element {
  const [films, setFilms] = useState<Film[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSearch, setCurrentSearch] = useState<string | null>("");

  const handleSearchInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      setCurrentSearch(event.target.value);
      setLoading(true);
    }
  };

  useEffect(() => {
    if (!loading) {
      return;
    }

    // we can use async functions inside hooks, but I prefer not to since it's less readable.
    // I prefer to use promises inside hooks. https://devtrium.com/posts/async-functions-useeffect
    SearchFilms(currentSearch)
      .then((response) => {
        setFilms(response?.films ?? []);
        setGenres(response?.genres ?? []);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentSearch, loading]);

  return (
    <CurrentSearchContext.Provider value={currentSearch}>
      <FilmResultsContext.Provider value={films}>
        <Header handleSearchInput={handleSearchInput} />
        <GenreResultsContext.Provider value={genres}>
          <FilmList />
        </GenreResultsContext.Provider>
      </FilmResultsContext.Provider>
    </CurrentSearchContext.Provider>
  );
}

export default BrowseFilms;
