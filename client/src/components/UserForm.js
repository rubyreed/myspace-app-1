import React, {useState} from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";

const UserForm = (props) => {

  const {newestUser, id, updateUser, email:initialEmail, password:initialPassword} = props

  const [emailState, setEmailState] = useState(initialEmail ? initialEmail: "");
  const [passwordState, setPasswordState] = useState(initialPassword ? initialPassword : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {email: emailState, password: passwordState};
  if (id) {
    let response = await axios.put(`/api/users/${id}`, newUser)
    updateUser(response.data)
  }
  else {
  let response = await axios.post("/api/auth", newUser);
  newestUser(response.data.data)
    }
  };

  return (
  <div style={styles.form}>
    <h1>{id ? "Update" : "New"}</h1>
      <Form onSubmit={handleSubmit}>
        <p>Email:</p>
        <Form.Input value = {emailState} onChange = {(e) => setEmailState(e.target.value)}/>
        <p>Password:</p>
        <Form.Input value = {passwordState} onChange = {(e) => setPasswordState(e.target.value)}/>
       <br/>
        <Button>{id ? "Update" : "Create"}</Button>
      </Form>
  </div>
  );
};

const styles = {
  form: {
    border: "3px solid blue",
    margin: "5px",
    padding: "5px"
  }
};

export default UserForm;