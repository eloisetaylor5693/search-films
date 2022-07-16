import { Film } from "../Film";
import "./FilmGenreSection.css";
import { render, screen } from "@testing-library/react";
import FilmGenreSection from "./FilmGenreSection";

const mockFilms: Film[] = [
  {
    id: "123",
    title: "hello",
    backdrop: "url.com",
    cast: ["Eloise"],
    genres: ["action", "drama"],
    director: "Eloise",
    imdb_rating: 4.9,
    length: "2 hours",
    released_on: new Date(2022, 5, 1),
    overview: "it's a nice film",
    poster: "url.com",
    slug: "slug-film-title",
  },
];

describe("FilmGenreSection", () => {
  describe('given a list of films which match the given genre', () => {
    it("Loads a genre title", () => {
      render(<FilmGenreSection filmList={mockFilms} genre={"action"} />);
      const result = screen.getByText("action");
      expect(result).toBeDefined();
    });
  
    it("Loads a spacific film thumbnail", () => {
      render(<FilmGenreSection filmList={mockFilms} genre={"action"} />);
      const result = screen.getByAltText("hello poster");
      expect(result).toBeDefined();
    });
  });

  describe('given a list of films which do not match the given genre', () => {
    it("Loads a genre title", () => {
      render(<FilmGenreSection filmList={mockFilms} genre={"sahdbfghsdbg"} />);
      const result = screen.getByText("sahdbfghsdbg");
      expect(result).toBeDefined();
    });
  
    it("Loads a spacific film thumbnail", () => {
      render(<FilmGenreSection filmList={mockFilms} genre={"ajdfbhjkabf"} />);
      const result = screen.queryByAltText("hello poster");
      expect(result).not.toBeInTheDocument();
    });
  });
  
});
