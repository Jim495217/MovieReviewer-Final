import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage(){

  const { register } = useAuth();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");
  const [error,setError] = useState("");

  function submit(e){

    e.preventDefault();

    try{
      register(username,password);

      setMessage("Account successfully created! You can now log in.");
      setError("");

      setUsername("");
      setPassword("");

    }catch(err){
      setError(err.message);
      setMessage("");
    }

  }

  return(

    <div className="container">

      <h1>Register</h1>

      {message && <p style={{color:"green"}}>{message}</p>}
      {error && <p style={{color:"red"}}>{error}</p>}

      <form onSubmit={submit}>

        <input
          placeholder="Username"
          value={username}
          onChange={e=>setUsername(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button>Create Account</button>

      </form>

    </div>

  )

}