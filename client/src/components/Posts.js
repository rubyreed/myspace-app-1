import React, {useEffect, useState} from "react";
import axios from "axios";
import Post from "./Post";
import PostForm from "./PostForm";
import { useParams } from "react-router";

const Posts = () => {

  const [posts, setPosts] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {

  const getPosts = async () => {
    let response = await axios.get(`/api/users/${params.id}/posts`);
    setPosts(response.data)
    console.log(response.data)
  };
 
    console.log("mounted");
    getPosts();
  
  },[]);

  const updatePost = (changedPost) => {
    let updatedPosts = posts.map((post) => (post.id === changedPost.id ? changedPost : post));
    setPosts(updatedPosts)
  }
  
  const renderPosts = () => {
    if (posts.length === 0) {
      return <p>No Posts</p>
    }
    return posts.map((post) => {
      return <Post key={post.id}{...post} updatePost={updatePost} deletePost={deletePost}/>;
    });
  };

  const displayNewPost = (post) => {
    setPosts([post,...posts])
  };

  const deletePost = async (id) => {
    let response = await axios.delete(`/api/users/${params.id}/posts/${id}`);
    let filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };
  
  return (
    <div className="card">
      <h1>Posts</h1>
      {renderPosts()}
      <br/>
      <PostForm newestPost = {displayNewPost}/>
  </div>
  );
};

// const styles = {
//   container: {
//     border: "5px solid white",
//     margin: "5px",
//     padding: "5px"
//   }
// };


export default Posts;