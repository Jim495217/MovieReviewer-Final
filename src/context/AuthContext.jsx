import {createContext,useContext,useState,useEffect} from "react";

const AuthContext = createContext();

export function AuthProvider({children}){

const [user,setUser] = useState(null);

useEffect(()=>{

const token = localStorage.getItem("token");

if(token){

setUser(JSON.parse(atob(token)));

}

},[]);

function login(username,role="audience"){

const token = btoa(JSON.stringify({username,role}));

localStorage.setItem("token",token);

setUser({username,role});

}

function logout(){

localStorage.removeItem("token");

setUser(null);

}

return(

<AuthContext.Provider
value={{
user,
login,
logout,
isAuthenticated: !!user,
isAdmin:()=>user?.role==="admin"
}}
>

{children}

</AuthContext.Provider>

);

}

export const useAuth=()=>useContext(AuthContext);