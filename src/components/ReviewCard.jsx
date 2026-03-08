import { useAuth } from "../context/AuthContext"

function ReviewCard({ review, onDelete }) {

  const { isAdmin, user } = useAuth()

  return (

    <div
      className="review-card"
      style={{
        borderBottom: "1px solid #ccc",
        paddingBottom: "20px",
        marginBottom: "20px"
      }}
    >

      <h4>{review.username}</h4>

      <p><b>Story:</b> {review.story}/5</p>
      <p><b>Style:</b> {review.style}/5</p>
      <p><b>Music:</b> {review.music}/5</p>

      <p>{review.text}</p>

      {(isAdmin || user?.username === review.username) && (

        <button
          onClick={() => onDelete(review.id)}
          style={{
            background: "red",
            color: "white",
            padding: "6px",
            border: "none",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Delete Review
        </button>

      )}

    </div>
  )
}

export default ReviewCard