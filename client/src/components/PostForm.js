import React, {useState} from "react";
import axios from "axios";
import { useParams } from "react-router";
import {Button, Form} from "semantic-ui-react";

const PostForm = (props) => {
  const params = useParams();
  const {newestPost, id, updatePost, title:initialTitle, body:initialBody} = props
  const [titleState, setTitleState] = useState(initialTitle ? initialTitle : "");
  const [bodyState, setBodyState] = useState(initialBody ? initialBody : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {title: titleState, body: bodyState};

    if (id){
      let response = await axios.put (`/api/users/${params.id}/posts/${id}`, newPost);
      updatePost(response.data)
    }
else {
 let response = await axios.post(`/api/users/${params.id}/posts/`, newPost);
    newestPost(response.data)
    }
  };

  return (
  <div style={styles.form}>
    <h1>{id ? "Update" : "New"}</h1>
      <Form onSubmit={handleSubmit}>
        <p>Title:</p>
        <Form.Input value = {titleState} onChange = {(e) => setTitleState(e.target.value)}/>
        <p>Body:</p>
        <Form.Input value = {bodyState} onChange = {(e) => setBodyState(e.target.value)}/>
       <br/>
        <Button>{id ? "Update" : "Create"}</Button>
      </Form>
  </div>
  );
};

const styles = {
  form: {
    border: "3px solid blue",
    margin: "5px",
    padding: "5px"
  }
};

export default PostForm;