import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <nav>
      {props.isLoggedIn ? (
        <>
          {/* // This link is only showed when user is logged in. */}
          <Link className="links" to="/home">
            Home
          </Link>
          <button
            className="logout-button"
            onClick={() => {
              props.setIsLoggedIn(false);
              localStorage.removeItem("token"); //Removes token from local storage when logout is clicked.
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          {/* // These links are showed when the user is logged out. */}
          <Link className="links" to="/posts">
            Posts
          </Link>
          <Link className="links" to="/login">
            Login
          </Link>
          <Link className="links" to="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
}

export default NavBar;