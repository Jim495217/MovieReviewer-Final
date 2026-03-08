import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage(){

  const { register } = useAuth();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  function submit(e){

    e.preventDefault();

    register(username,password);

  }

  return(

    <div className="container">

      <h1>Register</h1>

      <form onSubmit={submit}>

        <input
          placeholder="Username"
          onChange={e=>setUsername(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          onChange={e=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button>Create Account</button>

      </form>

    </div>

  )

}