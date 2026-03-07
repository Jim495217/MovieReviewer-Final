import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

function Navbar(){

const {user,logout} = useAuth();

return(

<nav>

<Link to="/">Home</Link>
<Link to="/search">Search</Link>
<Link to="/favorites">Favorites</Link>

{user?(
<>
<span>{user.username}</span>
<button onClick={logout}>Logout</button>
</>
):(
<>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
</>
)}

</nav>

);

}

export default Navbar;