import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

export default function HomePage() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function load() {
      const data = await getPopularMovies();
      setMovies(data.results);
    }

    load();

  }, []);

  return (
    <div className="container">

      <h1>Popular Movies</h1>

      <div className="movies-grid">

        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </div>
  );
}