import { MapGenresFromFilmList } from "./MapGenresFromFilmList";
import { films } from "../testData/films";

describe("MapGenresFromFilmList helper", () => {
  describe("Given a list of films that have genres", () => {
    it("Then should return a distinct list of genres in alphabetical order", () => {
      const result = MapGenresFromFilmList(films);

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
      const result = MapGenresFromFilmList([]);

      expect(result).toEqual([]);
    });
  });
});
