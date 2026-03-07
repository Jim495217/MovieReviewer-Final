function RatingSlider({label,value,setValue}){

return(

<div>

<label>{label}: {value}</label>

<input
type="range"
min="1"
max="10"
value={value}
onChange={(e)=>setValue(e.target.value)}
/>

</div>

);

}

export default RatingSlider;