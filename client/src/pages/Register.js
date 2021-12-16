import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
const Register = () => {
  const navigate = useNavigate();
  const { handleRegister } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      // let user know these don't match
      alert("passwords do not match");
      return;
    }
    // handleRegister in AuthProvider
    handleRegister({ email, password }, navigate);
  };
  return (
    <>
      <h1>Register New User</h1>
      <Form onSubmit={handleSubmit}>
        <p>Email</p>
        <Form.Input placeholder="enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>Password</p>
        <Form.Input placeholder="create password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p>Password Confirmation</p>
        <Form.Input placeholder="verify password"
          value={passwordConfirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
          }}
        />
        <Button>Register</Button>
      </Form>
    </>
  );
};

export default Register;
