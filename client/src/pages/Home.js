import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Users from "../components/Users";

const Home = () => {
  const auth = useContext(AuthContext);
 
  return (
    <div>
      <h1 className="welcome">Welcome to MySpace</h1>
      <Users/>
      {/* <p>Authenticated? {JSON.stringify(auth)}</p> */}
    </div>
  );
};

export default Home;
