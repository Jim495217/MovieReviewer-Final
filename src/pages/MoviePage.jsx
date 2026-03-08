import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchMovieDetails } from "../api/tmdb"
import { useAuth } from "../context/AuthContext"
import { useMovie } from "../context/MovieContext"
import ReviewCard from "../components/ReviewCard"

const IMG = "https://image.tmdb.org/t/p/w500"

function MoviePage() {

  const { id } = useParams()

  const { isAdmin } = useAuth()
  const { deleteMovie } = useMovie()

  const [movie, setMovie] = useState(null)
  const [reviews, setReviews] = useState([])

  useEffect(() => {

    fetchMovieDetails(id).then(setMovie)

    const stored = localStorage.getItem("reviews")
    const allReviews = stored ? JSON.parse(stored) : {}

    setReviews(allReviews[id] || [])

  }, [id])

  const deleteReview = (index) => {

    const stored = localStorage.getItem("reviews")
    const allReviews = stored ? JSON.parse(stored) : {}

    const updated = reviews.filter((_, i) => i !== index)

    allReviews[id] = updated

    localStorage.setItem("reviews", JSON.stringify(allReviews))

    setReviews(updated)
  }

  /* ⭐ Calculate Average User Rating */
  const averageRating = () => {

    if (reviews.length === 0) return null

    const total = reviews.reduce((sum, r) => {

      const reviewAvg =
        (Number(r.story) + Number(r.style) + Number(r.music)) / 3

      return sum + reviewAvg

    }, 0)

    return (total / reviews.length).toFixed(1)
  }

  if (!movie) return <p>Loading...</p>

  return (

    <div>

      <h1>{movie.title}</h1>

      {/* Movie Poster */}
      <img
        src={IMG + movie.poster_path}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      {/* TMDB Rating */}
      <p><strong>Rating:</strong> ⭐ {movie.vote_average}/10</p>

      {/* ⭐ User Rating */}
      {averageRating() && (
        <p>
          <strong>User Score:</strong> ⭐ {averageRating()} / 5
          {" "}({reviews.length} review{reviews.length !== 1 && "s"})
        </p>
      )}

      {/* Description */}
      <p>{movie.overview}</p>

      {isAdmin && (
        <button
          onClick={() => deleteMovie(movie.id)}
          style={{
            background: "red",
            color: "white",
            padding: "10px",
            marginBottom: "20px"
          }}
        >
          Delete Movie
        </button>
      )}

      {/* Write Review Button */}
      <Link to={`/review/${movie.id}`}>
        <button
          style={{
            padding: "10px",
            marginBottom: "20px",
            background: "#333",
            color: "white"
          }}
        >
          Write a Review
        </button>
      </Link>

      <h2>User Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <ReviewCard
            key={index}
            review={review}
            onDelete={() => deleteReview(index)}
          />
        ))
      )}

    </div>
  )
}

export default MoviePage