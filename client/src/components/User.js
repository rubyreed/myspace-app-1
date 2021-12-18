import React from "react";

const User = (props) => {
  return (
    <div>
      <h1>User</h1>
      <p>Email: {props.email}</p>
      <p>Password: {props.password}</p>
    </div>
  );
};

export default User;