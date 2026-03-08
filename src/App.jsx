import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";
import FavoritesPage from "./pages/FavoritesPage";
import ReviewPage from "./pages/ReviewPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import ProtectedRoute from "./routes/ProtectedRoute";
import NotFound from "./components/NotFound";

export default function App() {

  // Create admin user automatically if it doesn't exist
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const adminExists = users.find((u) => u.username === "admin");

    if (!adminExists) {
      users.push({
        username: "admin",
        password: "admin123",
        role: "admin"
      });

      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  return (
    <>
      <Navbar />

      <Routes>

        {/* Public pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected pages */}
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/review/:id"
          element={
            <ProtectedRoute>
              <ReviewPage />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}