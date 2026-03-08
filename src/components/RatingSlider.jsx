export default function RatingSlider({ rating, setRating }) {
  return (
    <input
      type="range"
      min="1"
      max="10"
      value={rating}
      onChange={(e) => setRating(e.target.value)}
    />
  );
}