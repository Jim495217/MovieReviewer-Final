import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {

  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">🎬 Movie Reviewer</Link>

      <Link to="/search">Search</Link>

      {user && <Link to="/favorites">Favorites</Link>}

      <div style={{marginLeft:"auto"}}>

        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>{" "}
            <Link to="/register">Register</Link>
          </>
        )}

      </div>
    </nav>
  );
}