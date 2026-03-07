import {useEffect,useState} from "react";
import {getPopularMovies} from "../api/tmdb";
import MovieCard from "../components/MovieCard";

function HomePage(){

const [movies,setMovies]=useState([]);

useEffect(()=>{

getPopularMovies().then(data=>{
setMovies(data.results);
});

},[]);

return(

<div>

<h1>Popular Movies</h1>

<div className="grid">

{movies.map(movie=>(
<MovieCard key={movie.id} movie={movie}/>
))}

</div>

</div>

);

}

export default HomePage;