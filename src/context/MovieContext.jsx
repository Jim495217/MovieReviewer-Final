import {createContext,useContext,useState} from "react";

const MovieContext = createContext();

export function MovieProvider({children}){

const [favorites,setFavorites] = useState([]);
const [reviews,setReviews] = useState([]);

function addFavorite(movie){
setFavorites(prev=>[...prev,movie]);
}

function removeFavorite(id){
setFavorites(prev=>prev.filter(m=>m.id!==id));
}

function addReview(review){
setReviews(prev=>[...prev,review]);
}

return(

<MovieContext.Provider
value={{
favorites,
reviews,
addFavorite,
removeFavorite,
addReview
}}
>

{children}

</MovieContext.Provider>

);

}

export const useMovies=()=>useContext(MovieContext);