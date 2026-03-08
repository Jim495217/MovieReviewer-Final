import { render } from "@testing-library/react";
import { AuthProvider } from "../context/AuthContext";

test("Auth provider renders children", () => {
  render(
    <AuthProvider>
      <div>test</div>
    </AuthProvider>
  );
});