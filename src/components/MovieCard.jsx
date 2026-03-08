import { Link } from "react-router-dom"
import { useMovie } from "../context/MovieContext"
import { useState } from "react"

const IMG = "https://image.tmdb.org/t/p/w500"

export default function MovieCard({ movie }) {

  const { addFavorite } = useMovie()
  const [message, setMessage] = useState("")

  const handleFavorite = () => {
    addFavorite(movie)

    setMessage("Added to Favorites")

    setTimeout(() => {
      setMessage("")
    }, 2000)
  }

  return (

    <div className="movie-card">

      <Link to={`/movie/${movie.id}`}>
        <img src={IMG + movie.poster_path} alt={movie.title} />
      </Link>

      <div className="movie-title">

        {movie.title}

        <button
          style={{ marginLeft: "10px" }}
          onClick={handleFavorite}
        >
          ❤️
        </button>

      </div>

      {message && (
        <div style={{ color: "green", fontSize: "14px", marginTop: "5px" }}>
          {message}
        </div>
      )}

    </div>

  )

}