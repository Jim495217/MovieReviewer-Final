import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import {getMovieDetails} from "../api/tmdb";

function MoviePage(){

const {id}=useParams();
const [movie,setMovie]=useState(null);

useEffect(()=>{

getMovieDetails(id).then(setMovie);

},[id]);

if(!movie) return <h2>Loading...</h2>;

return(

<div>

<h1>{movie.title}</h1>

<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

<p>{movie.overview}</p>

</div>

);

}

export default MoviePage;