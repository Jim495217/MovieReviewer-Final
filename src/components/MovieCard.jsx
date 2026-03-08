import { Link } from "react-router-dom";

const IMG = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie }) {

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">

      <img
        src={IMG + movie.poster_path}
        alt={movie.title}
      />

      <div className="movie-title">
        {movie.title}
      </div>

    </Link>
  );
}