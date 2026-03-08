import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovie } from "../api/tmdb";

const IMG = "https://image.tmdb.org/t/p/w500";

export default function MoviePage(){

  const { id } = useParams();

  const [movie,setMovie] = useState(null);

  useEffect(()=>{

    getMovie(id).then(setMovie);

  },[id]);

  if(!movie) return <p>Loading...</p>;

  return(

    <div className="movie-detail">

      <img src={IMG + movie.poster_path}/>

      <div>

        <h1>{movie.title}</h1>

        <p style={{marginTop:"10px"}}>
          ⭐ {movie.vote_average}
        </p>

        <p style={{marginTop:"20px"}}>
          {movie.overview}
        </p>

        <br/>

        <Link to={`/review/${movie.id}`}>
          <button>Write Review</button>
        </Link>

      </div>

    </div>

  )

}