import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import { Button } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = (props) => {
  // const {id, email, password, updateUser, deleteUser} = props

  const {id, email, password, updateUser, deleteUser} = useContext(AuthContext);

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
      <Button onClick = {toggleForm}>
        {showForm ? "Cancel" : "Update"}
      </Button>
      {showForm && <UserForm id = {id} email = {email} password = {password} updateUser = {updateUser}/>}
    <Button onClick={() => deleteUser(id)}>Delete</Button>
    <br/>
      <Link to={`/users/${id}/posts`}>View Posts</Link>
    </div>
  );
};

export default Profile;