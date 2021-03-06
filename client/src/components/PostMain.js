import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import { Button } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import PostForm from "./PostForm";

const PostMain = (props) => {


  const {user_id,id, title, body, updatePost, deletePost} = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
     {/* <Link to={`/users/${user_id}/posts/${id}`}>View</Link> */}
      {/* <Button onClick = {toggleForm}>
        {showForm ? "Cancel" : "Update"}
      </Button>
      {showForm && <PostForm id = {id} title = {title} body={body} updatePost = {updatePost}/>}
    <Button onClick={() => deletePost(id)}>Delete</Button> */}
    </div>
  )
};

export default PostMain;