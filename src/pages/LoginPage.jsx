import {useState} from "react";
import {useAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

function LoginPage(){

const [username,setUsername]=useState("");

const {login}=useAuth();

const navigate = useNavigate();

function handleSubmit(e){

e.preventDefault();

login(username);

navigate("/");

}

return(

<form onSubmit={handleSubmit}>

<h1>Login</h1>

<input
placeholder="username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<button>Login</button>

</form>

);

}

export default LoginPage;