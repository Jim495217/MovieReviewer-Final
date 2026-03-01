import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { BrowserRouter } from "react-router-dom";

test("renders movie title", () => {
  render(
    <BrowserRouter>
      <MovieCard movie={{ id: 1, title: "Test Movie", poster_path: "" }} />
    </BrowserRouter>
  );
  expect(screen.getByText("Test Movie")).toBeInTheDocument();
});