import FilmDetails from "./FilmDetails";
import { render, screen } from "@testing-library/react";
import { mockFilm } from "../testData/mockFilm";

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
