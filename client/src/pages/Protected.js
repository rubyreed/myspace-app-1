import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Protected = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="card">
      <h1>Login Successful!</h1>
      <p>Welcome {auth.email}!</p>
      <p>Email: {auth.email}</p>
      {/* <p> {JSON.stringify(auth)}</p> */}
      {auth.authenticated && <p>Take a trip back to the 90s.</p>}
      {!auth.authenticated && <p>ERROR SHOULD NOT BE HERE</p>}
    </div>
  );
};
export default Protected;
