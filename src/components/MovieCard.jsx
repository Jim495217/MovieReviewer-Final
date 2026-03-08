import { Link } from "react-router-dom"
import { useMovies } from "../context/MovieContext"

const IMG = "https://image.tmdb.org/t/p/w500"

export default function MovieCard({movie}){

  const { addFavorite } = useMovies()

  return(

    <div className="movie-card">

      <Link to={`/movie/${movie.id}`}>

        <img src={IMG + movie.poster_path}/>

      </Link>

      <div className="movie-title">

        {movie.title}

        <button
          style={{marginLeft:"10px"}}
          onClick={()=>addFavorite(movie)}
        >
          ❤️
        </button>

      </div>

    </div>

  )

}