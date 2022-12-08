import { React } from "react";
import { Link } from "react-router-dom";

function Header() {
  var isLoggedIn = false;

  console.log(isLoggedIn);

  return (
    <div className="header">
      <h1 className="app-title">Keeper</h1>
      <div className="login-navigator-container">
        {/* <p className="login-navigator">Login</p> */}
        {isLoggedIn ? (
          <Link to="/hello" className="hello-user-link">
            username
          </Link>
        ) : (
          <Link to="/login" className="login-link">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
