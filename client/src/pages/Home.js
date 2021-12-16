import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext);
 
  return (
    <div>
      <h1>Home!</h1>
      <p>Authenticated? {JSON.stringify(auth)}</p>
    </div>
  );
};

export default Home;
