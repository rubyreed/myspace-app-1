import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Protected = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h1>Login Successful</h1>
      <p>Welcome {auth.email}!</p>
      <p>Email: {auth.email}</p>
      {/* <p> {JSON.stringify(auth)}</p> */}
      {auth.authenticated && <p>successful</p>}
      {!auth.authenticated && <p>ERROR SHOULD NOT BE HERE</p>}
    </div>
  );
};
export default Protected;
