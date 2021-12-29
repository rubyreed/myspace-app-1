import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import { Button, Item } from "semantic-ui-react";

const User = (props) => {
  const {id, email, password} = props

  const [showForm, setShowForm] = useState(false);

 const toggleForm = () => {
   setShowForm(!showForm);
 };

  return (
    <div className="user" key={props.id}>
        <p> ID: {id} </p>
        <p>Email: {email}</p>
        {/* <span> Password: {password}</span> */}
       <button className="view"> <Link className="link" to={`/users/${id}/postsmain`}>View Posts</Link> </button>
    </div>
  );
};

export default User;