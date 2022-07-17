import { Film } from "../Film";

/** Returns a distinct list of all genres found in the film list provided */
export const getAllGenresFromFilmList = (films: Film[]): string[] => {
    const allGenres: string[] = [];
    films.forEach((x: Film) =>
      x.genres.forEach((y: string) => allGenres.push(y))
    );
    const distinctGenres = Array.from(new Set(allGenres)).sort();
    return distinctGenres;
  };