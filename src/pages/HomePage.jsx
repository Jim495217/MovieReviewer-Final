import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../services/tmdbApi";
import MovieCard from "../components/MovieCard";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default HomePage;