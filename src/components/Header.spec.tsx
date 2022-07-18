import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header component", () => {
  it("Loads site title", () => {
    render(<Header handleSearchInput={() => {}} />, {
      wrapper: BrowserRouter,
    });
    
    const result = screen.getByText("WOOKIE MOVIES");
    expect(result).toBeDefined();
  });
});
