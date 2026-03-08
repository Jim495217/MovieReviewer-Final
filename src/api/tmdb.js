const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE = "https://api.themoviedb.org/3"

export async function getPopularMovies() {

  const res = await fetch(
    `${BASE}/movie/popular?api_key=${API_KEY}`
  )

  return res.json()
}

export async function getMovie(id){

  const res = await fetch(
    `${BASE}/movie/${id}?api_key=${API_KEY}`
  )

  return res.json()
}

export async function searchMovies(query){

  const res = await fetch(
    `${BASE}/search/movie?api_key=${API_KEY}&query=${query}`
  )

  return res.json()
}

export async function getTrailer(id){

  const res = await fetch(
    `${BASE}/movie/${id}/videos?api_key=${API_KEY}`
  )

  const data = await res.json()

  return data.results.find(v => v.type === "Trailer")
}