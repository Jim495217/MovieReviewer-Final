import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

test("App renders without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});

test("Home page renders on default route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/home/i)).toBeInTheDocument();
});

test("Login page renders on /login route", () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test("Search page renders on /search route", () => {
  render(
    <MemoryRouter initialEntries={["/search"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/search/i)).toBeInTheDocument();
});

test("Unknown route renders 404 page", () => {
  render(
    <MemoryRouter initialEntries={["/unknown"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});