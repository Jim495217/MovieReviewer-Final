import { useState } from "react";
import RatingSlider from "../components/RatingSlider";

export default function ReviewPage() {
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  function submitReview() {
    alert("Review submitted");
  }

  return (
    <div>
      <h1>Write Review</h1>

      <RatingSlider rating={rating} setRating={setRating} />

      <textarea onChange={(e) => setText(e.target.value)} />

      <button onClick={submitReview}>Submit</button>
    </div>
  );
}