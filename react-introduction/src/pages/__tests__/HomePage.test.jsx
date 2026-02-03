import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";

describe("HomePage Component", () => {
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <HomePage/>
      </BrowserRouter>
    );
  });

  test("displays main content", () => {
    render(
      <BrowserRouter>
        <HomePage/>
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading", {
      name: /welcome to\s*componentcorner/i,
    });

    expect(heading).toBeInTheDocument();
  });
});