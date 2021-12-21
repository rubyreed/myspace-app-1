import React, {useState} from "react";
import axios from "axios";
import { useParams } from "react-router";
import {Button, Form} from "semantic-ui-react";

const PostForm = (props) => {

  const {newestPost} = props

  const params = useParams();

  const [titleState, setTitleState] = useState("");
  const [bodyState, setBodyState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {title: titleState, body: bodyState};

 let response = await axios.post(`/api/users/${params.id}/posts/`, newPost);
    newestPost(response.data)
  };

  return (
  <div style={styles.form}>
    <h1>Add New Post</h1>
      <Form onSubmit={handleSubmit}>
        <p>Title:</p>
        <Form.Input value = {titleState} onChange = {(e) => setTitleState(e.target.value)}/>
        <p>Body:</p>
        <Form.Input value = {bodyState} onChange = {(e) => setBodyState(e.target.value)}/>
       <br/>
        <Button>Click to Add New Post</Button>
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