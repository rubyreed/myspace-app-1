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
    <div key={props.id}>
      <Item className="user">
        <Item.Content>
      <Item.Header>User</Item.Header>
      <Item.Meta>
        <span> ID: {id} </span>
        <br/>
        <span>Email: {email}</span>
        <br/>
        <span> Password: ******</span>
        <br/>
       <button className="view"> <Link className="link" to={`/users/${id}/postsmain`}>View Posts</Link> </button>
      </Item.Meta>
      </Item.Content>
      </Item>
    </div>
  );
};

export default User;