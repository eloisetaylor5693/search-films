import { Film } from "../Film";

/** Returns a distinct list of all genres found in the film list provided */
export const MapGenresFromFilmList = (films: Film[]): string[] => {
  const allGenres: string[] = films.flatMap((x: Film) => x.genres).sort();

  // `Set` creates a unique collection of items
  return [...new Set(allGenres)];
};
