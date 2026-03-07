const API="https://api.themoviedb.org/3";
const KEY=import.meta.env.VITE_TMDB_API_KEY;

export async function getPopularMovies(){

const res = await fetch(`${API}/movie/popular?api_key=${KEY}`);

return res.json();

}

export async function searchMovies(query){

const res = await fetch(`${API}/search/movie?api_key=${KEY}&query=${query}`);

return res.json();

}

export async function getMovieDetails(id){

const res = await fetch(`${API}/movie/${id}?api_key=${KEY}`);

return res.json();

}