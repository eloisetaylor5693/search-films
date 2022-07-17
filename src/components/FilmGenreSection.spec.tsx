import { Film } from "../Film";
import "./FilmGenreSection.css";
import { render, screen } from "@testing-library/react";
import FilmGenreSection from "./FilmGenreSection";
import { BrowserRouter } from "react-router-dom";

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
    released_on: "2008-07-16T00:00:00",
    overview: "it's a nice film",
    poster: "url.com",
    slug: "slug-film-title",
  },
];

describe("FilmGenreSection component", () => {
  describe("given a list of films which match the given genre", () => {
    it("Loads a genre title", () => {
      render(<FilmGenreSection filmList={mockFilms} genre={"action"} />, {
        wrapper: BrowserRouter,
      });
      const result = screen.getByText("action");
      expect(result).toBeDefined();
    });

    it("Loads a specific film thumbnail", () => {
      render(<FilmGenreSection filmList={mockFilms} genre={"action"} />, {
        wrapper: BrowserRouter,
      });
      const result = screen.getByAltText("hello poster");
      expect(result).toBeDefined();
    });
  });

  describe("given a list of films which do not match the given genre", () => {
    it("Loads a genre title", () => {
      render(<FilmGenreSection filmList={mockFilms} genre={"sahdbfghsdbg"} />, {
        wrapper: BrowserRouter,
      });
      const result = screen.getByText("sahdbfghsdbg");
      expect(result).toBeDefined();
    });

    it("Loads a spacific film thumbnail", () => {
      render(<FilmGenreSection filmList={mockFilms} genre={"ajdfbhjkabf"} />, {
        wrapper: BrowserRouter,
      });
      const result = screen.queryByAltText("hello poster");
      expect(result).not.toBeInTheDocument();
    });
  });
});
