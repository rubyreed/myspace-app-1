import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  const {id, email, password} = props
  console.log(props);
  return (
    <div key={props.id}>
      <h1>User</h1>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>Password: ****** </p>
      <Link to={`/users/${id}`}>View</Link>
    </div>
  );
};

export default User;