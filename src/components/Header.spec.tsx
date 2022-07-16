import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe('Header', () => {
  it('Loads site title', () => {
    render(<Header/>);
      const result = screen.getByText("WOOKIE MOVIES");
      expect(result).toBeDefined();
  });
});
