import {useMovies} from "../context/MovieContext";
import {useParams} from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

function ReviewPage(){

const {id}=useParams();
const {reviews}=useMovies();

const movieReviews = reviews.filter(r=>r.movieId===id);

return(

<div>

<h1>Reviews</h1>

{movieReviews.map((r,i)=>(
<ReviewCard key={i} review={r}/>
))}

</div>

);

}

export default ReviewPage;