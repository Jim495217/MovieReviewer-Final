import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function FavoritesPage() {
  const { favorites } = useMovies();

  return (
    <div className="grid">
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
}

export default FavoritesPage;