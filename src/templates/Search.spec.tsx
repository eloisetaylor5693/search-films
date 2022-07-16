import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe('Search template', () => {
  it('Loads site title', () => {
    render(<Search/>);
      const result = screen.getByText("WOOKIE MOVIES");
      expect(result).toBeDefined();
  });
});