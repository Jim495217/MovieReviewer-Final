import { useState } from "react"
import { useParams } from "react-router-dom"
import StarRating from "../components/StarRating"

export default function ReviewPage(){

  const { id } = useParams()

  const [rating,setRating] = useState(3)
  const [text,setText] = useState("")
  const [message,setMessage] = useState("")

  function submitReview(){

    if(text.trim() === ""){
      setMessage("Please write a review first.")
      return
    }

    const stored = localStorage.getItem("reviews")

    const reviews = stored ? JSON.parse(stored) : {}

    if(!reviews[id]){
      reviews[id] = []
    }

    reviews[id].push({
      rating: rating,
      text: text,
      date: new Date().toLocaleDateString()
    })

    localStorage.setItem("reviews", JSON.stringify(reviews))

    setText("")
    setRating(3)

    setMessage("Review saved successfully!")
  }

  return(

    <div className="container">

      <h1>Write Review</h1>

      <StarRating
        rating={rating}
        setRating={setRating}
      />

      <br/>

      <textarea
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Write your review..."
      />

      <br/><br/>

      <button onClick={submitReview}>
        Submit Review
      </button>

      {message && (
        <p style={{marginTop:"10px", color:"lightgreen"}}>
          {message}
        </p>
      )}

    </div>
  )
}