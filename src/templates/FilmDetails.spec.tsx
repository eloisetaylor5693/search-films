import { Film } from "../Film";
import FilmDetails from "./FilmDetails";
import { render, screen } from "@testing-library/react";

const mockFilm: Film = {
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

describe("FilmDetails template", () => {
  it("Loads site title", () => {
    render(<FilmDetails film={mockFilm} />);
    const result = screen.getByText("WOOKIE MOVIES");
    expect(result).toBeDefined();
  });

  it("should show film title", () => {
    render(<FilmDetails film={mockFilm} />);
    const result = screen.getByText(/hello/i);
    expect(result).toBeDefined();
  });

  it("should show film rating", () => {
    render(<FilmDetails film={mockFilm} />);
    const result = screen.getByText(/(4.9)/i);
    expect(result).toBeDefined();
  });

  it("should show film length", () => {
    render(<FilmDetails film={mockFilm} />);
    const result = screen.getByText(/2 hours/i);
    expect(result).toBeDefined();
  });

  it("should show cast", () => {
    render(<FilmDetails film={mockFilm} />);
    const result = screen.getByText(/Eloise, My cat/i);
    expect(result).toBeDefined();
  });

  it("should show description", () => {
    render(<FilmDetails film={mockFilm} />);
    const result = screen.getByText(/movie description: it's a nice film/i);
    expect(result).toBeDefined();
  });
});
