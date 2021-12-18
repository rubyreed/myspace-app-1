import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {Menu, Button, Container} from "semantic-ui-react";

const Layout = () => {
  let nav = useNavigate();

  const { authenticated, handleLogout } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return <Button onClick={() => handleLogout(nav)}>Logout</Button>;
    }
    return (
      <>
      <Menu>
        <Menu.Item>
          <Link to="/register">Register</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">Login</Link>
        </Menu.Item>
        </Menu>
      </>
    );
  };
  return (
    <>
    <Menu>
      <Menu.Item>
        <Link to="/users">Users</Link>
      </Menu.Item>
      <Menu.Item>
          <Link to="/">Home</Link>
          <Menu.Item>
      </Menu.Item>
      <Menu.Item>
          <Link to="/public">Public</Link>
      </Menu.Item>
      <Menu.Item>
          <Link to="/protected">Protected</Link>
      </Menu.Item>
        {renderAuthLinks()}
      </Menu.Item>
      </Menu>
      <Container>
        <Outlet />
      </Container>
      </>
  );
};

export default Layout;
