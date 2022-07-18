import { Film } from "../Film";
import { MapGenresFromFilmList } from "./MapGenresFromFilmList";

export interface SearchFilmResult {
  films: Film[];
  genres: string[];
}

export function SearchFilms(
  currentSearch?: string | null
): Promise<SearchFilmResult | null> {
  const url = currentSearch
    ? "https://wookie.codesubmit.io/movies?q=" + currentSearch
    : "https://wookie.codesubmit.io/movies";

  console.log({
    currentSearch: currentSearch,
    url: url,
  });

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer Wookie2021",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const allGenres = MapGenresFromFilmList(data.movies);
      return Promise.resolve({ films: data.movies, genres: allGenres });
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
