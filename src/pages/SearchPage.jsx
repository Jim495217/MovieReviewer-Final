import {useState} from "react";
import {searchMovies} from "../api/tmdb";
import MovieCard from "../components/MovieCard";

function SearchPage(){

const [query,setQuery]=useState("");
const [results,setResults]=useState([]);

async function handleSearch(e){

e.preventDefault();

const data = await searchMovies(query);

setResults(data.results);

}

return(

<div>

<form onSubmit={handleSearch}>

<input
value={query}
onChange={(e)=>setQuery(e.target.value)}
placeholder="Search movies"
/>

<button>Search</button>

</form>

<div className="grid">

{results.map(movie=>(
<MovieCard key={movie.id} movie={movie}/>
))}

</div>

</div>

);

}

export default SearchPage;