import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

export default function FavoritesPage() {
  const { favorites } = useMovies();

  return (
    <div>
      <h1>Your Favorites</h1>
      {favorites.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}