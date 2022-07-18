import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BrowseFilms from "./BrowseFilms";

describe("BrowseFilms template", () => {
  it("Loads site title", () => {
    render(<BrowseFilms />, {
      wrapper: BrowserRouter,
    });
    
    const result = screen.getByText("WOOKIE MOVIES");
    expect(result).toBeDefined();
  });
});
