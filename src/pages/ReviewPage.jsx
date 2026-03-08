import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ReviewPage() {

  const { id } = useParams();

  const [story, setStory] = useState(3);
  const [style, setStyle] = useState(3);
  const [music, setMusic] = useState(3);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  function submitReview() {

    if (text.trim() === "") {
      setMessage("Please write a review first.");
      return;
    }

    const stored = localStorage.getItem("reviews");
    const reviews = stored ? JSON.parse(stored) : {};

    if (!reviews[id]) {
      reviews[id] = [];
    }

    reviews[id].push({
      story: Number(story),
      style: Number(style),
      music: Number(music),
      text,
      date: new Date().toLocaleDateString()
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    setText("");
    setStory(3);
    setStyle(3);
    setMusic(3);

    setMessage("Review saved successfully!");
  }

  return (
    <div className="container">

      <h1>Write Review</h1>

      <h3>Story</h3>
      <input
        type="range"
        min="1"
        max="5"
        value={story}
        onChange={(e) => setStory(e.target.value)}
      />
      <p>{story} / 5</p>

      <h3>Style</h3>
      <input
        type="range"
        min="1"
        max="5"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      />
      <p>{style} / 5</p>

      <h3>Music</h3>
      <input
        type="range"
        min="1"
        max="5"
        value={music}
        onChange={(e) => setMusic(e.target.value)}
      />
      <p>{music} / 5</p>

      <h3>General Review</h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts about the movie..."
        rows="6"
        style={{ width: "100%" }}
      />

      <br /><br />

      <button onClick={submitReview}>
        Submit Review
      </button>

      {message && (
        <p style={{ marginTop: "10px", color: "lightgreen" }}>
          {message}
        </p>
      )}

    </div>
  );
}