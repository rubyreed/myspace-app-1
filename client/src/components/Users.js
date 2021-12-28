import React, {useEffect, useState} from "react";
import axios from "axios";
import User from "./User";
// import UserForm from "./UserForm";

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
  return users.map((you) => {
    return <User key={you.id}{...you}deleteUser={deleteUser}/>
  });
};

function refreshPage(){
  window.location.reload(false);
};
console.log(users);

const deleteUser = async (id) => {
  let response = await axios.delete(`/api/users/${id}`);
  let filteredUsers = users.filter((user) => user.id !== id);
  setUsers(filteredUsers);
  refreshPage();
};

// const displayNewUser = (user) => {
//   setUsers([user,...users])
// };


  return (
    <div>
      <h2 className="browse">Browse Users</h2>
      {/* <UserForm newestUser = {displayNewUser}/> */}
      {renderUsers()}
    </div>
  );
};

export default Users;