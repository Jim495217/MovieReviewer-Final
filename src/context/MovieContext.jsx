import { createContext, useContext, useState } from "react"

const MovieContext = createContext()

export function MovieProvider({ children }) {

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  )

  const [deletedMovies, setDeletedMovies] = useState(
    JSON.parse(localStorage.getItem("deletedMovies")) || []
  )

  const addFavorite = (movie) => {

    const updated = [...favorites, movie]

    setFavorites(updated)

    localStorage.setItem("favorites", JSON.stringify(updated))
  }

  const removeFavorite = (movieId) => {

    const updated = favorites.filter((m) => m.id !== movieId)

    setFavorites(updated)

    localStorage.setItem("favorites", JSON.stringify(updated))
  }

  const deleteMovie = (movieId) => {

    const updated = [...deletedMovies, movieId]

    setDeletedMovies(updated)

    localStorage.setItem("deletedMovies", JSON.stringify(updated))
  }

  return (
    <MovieContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        deleteMovie,
        deletedMovies
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export function useMovie() {
  return useContext(MovieContext)
}