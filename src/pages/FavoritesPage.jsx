import { useMovie } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

export default function FavoritesPage() {

  const { favorites, removeFavorite } = useMovie();

  // Remove duplicate movies by id
  const uniqueFavorites = Array.from(
    new Map(favorites.map(movie => [movie.id, movie])).values()
  );

  return (
    <div>

      <h1>Your Favorites</h1>

      {uniqueFavorites.length === 0 ? (
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

          {uniqueFavorites.map((m) => (
            <div key={m.id} style={{ position: "relative" }}>

              <MovieCard movie={m} />

              <button
                onClick={() => removeFavorite(m.id)}
                style={{
                  marginTop: "5px",
                  width: "100%",
                  background: "#ff4d4d",
                  color: "white",
                  border: "none",
                  padding: "6px",
                  cursor: "pointer",
                  borderRadius: "4px"
                }}
              >
                Remove
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}