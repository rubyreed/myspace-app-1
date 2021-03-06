import React, {useState} from "react";
import {Link} from "react-router-dom";
import { Button } from "semantic-ui-react";
import PostForm from "./PostForm";

const Post = (props) => {
  const {user_id,id, title, body, updatePost, deletePost} = props
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="post">
      <p>Title: {title}</p>
      <p>Body: {body}</p>
     {/* <Link to={`/users/${user_id}/posts/${id}`}>View</Link> */}
      <Button onClick = {toggleForm}>
        {showForm ? "Cancel" : "Update"}
      </Button>
      {showForm && <PostForm id = {id} title = {title} body={body} updatePost = {updatePost}/>}
    <Button onClick={() => deletePost(id)}>Delete</Button>
    </div>
  )
};

export default Post;