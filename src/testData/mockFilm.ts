import { Film } from "../Film";

export const mockFilm: Film = {
  id: "123",
  title: "hello",
  backdrop: "url.com",
  cast: ["Eloise", "My cat"],
  genres: ["action", "drama"],
  director: "Eloise",
  imdb_rating: 4.9,
  length: "2 hours",
  released_on: "2008-07-16T00:00:00",
  overview: "it's a nice film",
  poster: "url.com",
  slug: "slug-film-title",
};

export const mockFilms: Film[] = [mockFilm];
