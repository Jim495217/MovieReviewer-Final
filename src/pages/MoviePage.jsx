import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovie, getTrailer } from "../api/tmdb"

const IMG = "https://image.tmdb.org/t/p/w500"

export default function MoviePage(){

  const { id } = useParams()

  const [movie,setMovie] = useState(null)
  const [trailer,setTrailer] = useState(null)

  useEffect(()=>{

    getMovie(id).then(setMovie)
    getTrailer(id).then(setTrailer)

  },[id])

  if(!movie) return <p>Loading...</p>

  const reviews =
    JSON.parse(localStorage.getItem("reviews") || "{}")[id] || []

  return(

    <div className="container">

      <div className="movie-detail">

        <img src={IMG + movie.poster_path} />

        <div>

          <h1>{movie.title}</h1>

          <p style={{marginTop:"10px"}}>
            ⭐ {movie.vote_average}
          </p>

          <p style={{marginTop:"20px"}}>
            {movie.overview}
          </p>

          {/* WRITE REVIEW BUTTON */}
          <Link to={`/review/${movie.id}`}>
            <button style={{marginTop:"20px"}}>
              Write Review
            </button>
          </Link>

        </div>

      </div>

      {/* TRAILER */}

      {trailer && (

        <iframe
          width="700"
          height="400"
          src={`https://www.youtube.com/embed/${trailer.key}`}
        />

      )}

      {/* REVIEWS */}

<h2 style={{marginTop:"40px"}}>User Reviews</h2>

{reviews.length === 0 && <p>No reviews yet.</p>}

{reviews.map((r,i)=>{

  const avg = (
    (Number(r.story) + Number(r.style) + Number(r.music)) / 3
  ).toFixed(1)

  return(

    <div
      key={i}
      style={{
        marginTop:"20px",
        padding:"15px",
        border:"1px solid #444",
        borderRadius:"8px"
      }}
    >

      <strong>Average Rating: ⭐ {avg} / 5</strong>

      <p>Story: {r.story} / 5</p>
      <p>Style: {r.style} / 5</p>
      <p>Music: {r.music} / 5</p>

      <p style={{marginTop:"10px"}}>
        {r.text}
      </p>

      <small>{r.date}</small>

    </div>

  )

})}

    </div>

  )
}