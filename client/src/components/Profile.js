import React, {useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import { Button } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const Profile = (props) => {

  const {id, email, password, updateUser} = useContext(AuthContext);

  useEffect(() => {
    console.log("mounted");
    getUsers();
  },[]);
  

  const [showForm, setShowForm] = useState(false);

 const toggleForm = () => {
   setShowForm(!showForm);
 };

 const deleteUser = async (id) => {
  let response = await axios.delete(`/api/users/${id}`);
  let filteredUsers = users.filter((user) => user.id !== id);
  setUsers(filteredUsers);
  refreshPage();
};

const getUsers = async () => {
  let response = await axios.get("/api/users");
  setUsers(response.data)
};

const [users, setUsers] = useState([]);


function refreshPage(){
  window.location.reload(false);
};

  return (
    <div className="card" key={props.id}>
      <h1>Profile</h1>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>Password: {password} </p>
      <Button onClick = {toggleForm}>
        {showForm ? "Cancel" : "Update"}
      </Button>
      {showForm && <UserForm id = {id} email = {email} password = {password} updateUser = {updateUser}/>}
    <Button onClick={() => deleteUser(id)}>Delete</Button>
    <br/>
      <button className="view"> <Link className="link" to={`/users/${id}/posts`}>View Posts</Link> </button>
    </div>
  );
};

export default Profile;