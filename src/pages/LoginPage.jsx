import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){

  const { login } = useAuth();
  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");
  const [error,setError] = useState("");

  function submit(e){

    e.preventDefault();

    try{

      login(username,password);

      setMessage("Login successful!");
      setError("");

      setUsername("");
      setPassword("");

      setTimeout(() => navigate("/"), 1500);

    }catch(err){

      setError(err.message);
      setMessage("");

    }

  }

  return(

    <div className="container">

      <h1>Login</h1>

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

        <button>Login</button>

      </form>

    </div>

  )

}