import React, { useMemo, useState } from "react";
import { Film } from "../Film";
import FilmList from "../components/FilmList";

export const FilmResultsContext = React.createContext<Film[]>([]);

function Search(): JSX.Element {
  const [films, setFilms] = useState<Film[]>([]);
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
        console.log(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [films]);

  return (
    <FilmResultsContext.Provider value={films}>
        <div>
            <button>Search</button>
        </div>
      <FilmList />
    </FilmResultsContext.Provider>
  );
}

export default Search;
