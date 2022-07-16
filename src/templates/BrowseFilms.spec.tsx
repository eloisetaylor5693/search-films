import { render, screen } from "@testing-library/react";
import BrowseFilms from "./BrowseFilms";

describe('BrowseFilms template', () => {
  it('Loads site title', () => {
    render(<BrowseFilms/>);
      const result = screen.getByText("WOOKIE MOVIES");
      expect(result).toBeDefined();
  });
});