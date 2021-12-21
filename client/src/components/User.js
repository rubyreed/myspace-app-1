import React, {useState} from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import { Button } from "semantic-ui-react";

const User = (props) => {
  const {id, email, password, updateUser, deleteUser} = props;
  const [showForm, setShowForm] = useState(false);

 const toggleForm = () => {
   setShowForm(!showForm);
 };

  return (
    <div key={props.id}>
      <h1>User</h1>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>Password: ****** </p>
      <Link to={`/users/${id}`}>View</Link>
      <Button onClick = {toggleForm}>
        {showForm ? "Cancel" : "Update"}
      </Button>
      {showForm && <UserForm id = {id} email = {email} password = {password} updateUser = {updateUser}/>}
    <Button onClick={() => deleteUser(id)}>Delete</Button>
    </div>
  );
};

export default User;