import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginPage(){

  const { login } = useAuth();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  function submit(e){

    e.preventDefault();

    login(username,password);

  }

  return(

    <div className="container">

      <h1>Login</h1>

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

        <button>Login</button>

      </form>

    </div>

  )

}