import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(movie) {
    setFavorites([...favorites, movie]);
  }

  function removeFavorite(id) {
    setFavorites(favorites.filter((m) => m.id !== id));
  }

  return (
    <MovieContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}