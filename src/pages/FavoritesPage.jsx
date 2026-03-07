import {useMovies} from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function FavoritesPage(){

const {favorites}=useMovies();

return(

<div>

<h1>Favorite Movies</h1>

<div className="grid">

{favorites.map(movie=>(
<MovieCard key={movie.id} movie={movie}/>
))}

</div>

</div>

);

}

export default FavoritesPage;