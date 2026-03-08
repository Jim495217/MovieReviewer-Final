export default function ReviewCard({ review }) {
  return (
    <div>
      <p>{review.text}</p>
      <strong>{review.rating}/10</strong>
    </div>
  );
}