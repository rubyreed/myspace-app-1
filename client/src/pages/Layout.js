import { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {Menu, Button, Container} from "semantic-ui-react";


const Layout = () => {
  let nav = useNavigate();

  const { authenticated, handleLogout } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return(
      <div> 
        <button className="navbutton">
        <Link className="navlink" to="/users/profile">Profile</Link>
        </button>
      <button className="navbutton" onClick={() => handleLogout(nav)}>Logout</button>
      </div>
      )}
    return (
      <div>
        <button className="navbutton">
          <Link className="navlink" to="/register">Register</Link>
        </button>
        <button className="navbutton">
          <Link className="navlink" to="/login">Login</Link>
        </button>
        </div>
    );
  };
  return (
    <>
    <div className="menu">
      <button className="navbutton">
        <Link className="navlink" to="/">Home</Link>
      </button>
      <div>
        {renderAuthLinks()}
      </div>
      </div>
      <div className="pages">
        <Outlet />
      </div>
      </>
  );
};

const styles={
logout: {
  textAlign: "right",
}
};

export default Layout;
