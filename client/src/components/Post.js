import React from "react";
import {Link} from "react-router-dom";

const Post = (props) => {
  const {user_id,id, title, body} = props
  return (
    <div>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <Link to={`/users/${user_id}/posts/${id}`}>View</Link>
    </div>
  )
};

export default Post;