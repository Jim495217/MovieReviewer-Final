import { useState } from "react";
import { searchMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

export default function SearchPage() {

  const [query,setQuery] = useState("");
  const [movies,setMovies] = useState([]);

  async function handleSearch(){

    const data = await searchMovies(query);
    setMovies(data.results);

  }

  return (
    <div className="container">

      <h1>Search Movies</h1>

      <div className="search-bar">

        <input
          placeholder="Search movies..."
          value={query}
          onChange={e=>setQuery(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>

      </div>

      <div className="movies-grid">

        {movies.map(movie=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))}

      </div>

    </div>
  );
}