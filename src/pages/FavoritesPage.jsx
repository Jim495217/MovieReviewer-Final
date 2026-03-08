import { useMovie } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

export default function FavoritesPage() {

  const { favorites } = useMovie();

  return (
    <div>

      <h1>Your Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          {favorites.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      )}

    </div>
  );

}