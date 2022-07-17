import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  it("Loads site title", () => {
    render(<Header handleSearchInput={() => {}} />);
    const result = screen.getByText("WOOKIE MOVIES");
    expect(result).toBeDefined();
  });
});
