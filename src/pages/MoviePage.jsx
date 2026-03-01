import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/tmdbApi";
import { useMovies } from "../context/MovieContext";

function MoviePage() {
  const { id } = useParams();
  const { addFavorite, submitRating } = useMovies();
  const [movie, setMovie] = useState(null);
  const [animation, setAnimation] = useState(5);
  const [story, setStory] = useState(5);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const handleSubmit = () => {
    submitRating(id, { animation, story });
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>

      <button onClick={() => addFavorite(movie)}>Add to Favorites</button>

      <h3>Rate This Movie</h3>
      <label>
        Animation:
        <input
          type="number"
          value={animation}
          onChange={(e) => setAnimation(Number(e.target.value))}
          min="1"
          max="10"
        />
      </label>

      <label>
        Story:
        <input
          type="number"
          value={story}
          onChange={(e) => setStory(Number(e.target.value))}
          min="1"
          max="10"
        />
      </label>

      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
}

export default MoviePage;