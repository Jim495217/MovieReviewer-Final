import { render, screen } from "@testing-library/react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import userEvent from "@testing-library/user-event";

function TestComponent() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <span data-testid="user">
        {user ? user.username : "no user"}
      </span>

      <button onClick={() => login("test", "123")}>
        login
      </button>

      <button onClick={logout}>
        logout
      </button>
    </div>
  );
}

test("AuthProvider renders children", () => {
  render(
    <AuthProvider>
      <div>test</div>
    </AuthProvider>
  );

  expect(screen.getByText("test")).toBeInTheDocument();
});

test("default user is null", () => {
  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );

  expect(screen.getByTestId("user").textContent).toBe("no user");
});

test("login updates user", async () => {
  const user = userEvent.setup();

  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );

  await user.click(screen.getByText("login"));

  expect(screen.getByTestId("user").textContent).toBe("test");
});

test("logout clears user", async () => {
  const user = userEvent.setup();

  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );

  await user.click(screen.getByText("login"));
  await user.click(screen.getByText("logout"));

  expect(screen.getByTestId("user").textContent).toBe("no user");
});