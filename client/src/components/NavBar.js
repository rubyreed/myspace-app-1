import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/users'>Users</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default NavBar;