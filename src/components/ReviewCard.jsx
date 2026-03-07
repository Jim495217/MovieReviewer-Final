function ReviewCard({review}){

return(

<div>

<h4>{review.user}</h4>

<p>{review.comment}</p>

</div>

);

}

export default ReviewCard;