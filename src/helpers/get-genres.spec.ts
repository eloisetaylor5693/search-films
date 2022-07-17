import { getAllGenresFromFilmList } from "./get-genres";
import filmData from "../testData/films.json";

describe("getGenres helper", () => {
  const films = filmData.movies;

  describe("Given a list of films that have genres", () => {
    it("Then should return a distinct list of genres in alphabetical order", () => {
      const result = getAllGenresFromFilmList(films);

      expect(result).toEqual([
        "Action",
        "Adventure",
        "Animation",
        "Biography",
        "Crime",
        "Drama",
        "Family",
        "History",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Thriller",
        "War",
      ]);
    });
  });

  describe("Given no films", () => {
    it("Then should return an empty array of genres", () => {
      const result = getAllGenresFromFilmList([]);

      expect(result).toEqual([]);
    });
  });
});
