import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostShow = () => {
 
  const params = useParams();
  const [post, setPost] = useState({});
  console.log(params);
useEffect(() => {
 

const getPost = async () => {
  try {
    let response = await axios.get(`/api/users/${params.user_id}/posts/${params.id}`);
    setPost(response.data);
  } catch (err) {
    alert("err occurred getting post");
  }
};

getPost();
}, []);

return (
  <div>
    <p>Show Post</p>
    <p>Title: {post.title}</p>
    <p>Body: {post.body}</p>
  </div>
);
};

export default PostShow;