import React, {useEffect, useState} from "react";
import axios from "axios";
import User from "./User";
import UserForm from "./UserForm";

const Users = () => {

const [users, setUsers] = useState([]);

useEffect(() => {
  console.log("mounted");
  getUsers();
},[]);

const getUsers = async () => {
  let response = await axios.get("/api/users");
  setUsers(response.data)
};

const updateUser = (changedUser) => {
  let updatedUsers = users.map((user) => (user.id === changedUser.id ? changedUser : user))
  setUsers(updatedUsers)
};

const renderUsers = () => {
  if (users.length === 0) {
    return <p>No Users</p>
  }
  return users.map((user) => {
    return <User key={user.id}{...user}updateUser={updateUser}/>
  });
};

// const displayNewUser = (user) => {
//   setUsers([user,...users])
// };


  return (
    <div>
      <h1>MySpace Users</h1>
      {/* <UserForm newestUser = {displayNewUser}/> */}
      {renderUsers()}
    </div>
  );
};

export default Users;