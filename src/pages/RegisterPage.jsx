import {useState} from "react";
import {useAuth} from "../context/AuthContext";

function RegisterPage(){

const [username,setUsername]=useState("");

const {login}=useAuth();

function handleSubmit(e){

e.preventDefault();

login(username);

}

return(

<form onSubmit={handleSubmit}>

<h1>Register</h1>

<input
value={username}
onChange={(e)=>setUsername(e.target.value)}
placeholder="username"
/>

<button>Register</button>

</form>

);

}

export default RegisterPage;