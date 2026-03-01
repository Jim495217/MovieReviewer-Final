import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});

  const addFavorite = (movie) => {
    setFavorites((prev) =>
      prev.find((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const submitRating = (movieId, categoryRatings) => {
    setRatings((prev) => ({
      ...prev,
      [movieId]: categoryRatings,
    }));
  };

  return (
    <MovieContext.Provider
      value={{ favorites, addFavorite, ratings, submitRating }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}
