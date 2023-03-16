import React, { useState, useContext } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';

const AddPosts = () => {
  const globalState = useContext(GlobalState);

  const [post, setPost] = useState({ title: '', body: '' });

  const handleChangeTitle = (event) => {
    setPost({ ...post, title: event.target.value });
  };

  const handleChangeBody = (event) => {
    setPost({ ...post, body: event.target.value });
  };

  const handleClear = () => {
    setPost({ title: '', body: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user_id = globalState.dbProfileState.uid;
    const username = globalState.dbProfileState.username;

    const data = {
      title: post.title,
      body: post.body,
      username: username,
      uid: user_id,
    };

    axios
      .post('/api/post/posttodb', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .then(() => handleClear())
      .then(() => {
        axios
          .post('/api/post/allposts')
          .then((res) => globalState.handleAddPosts(res.data))
          .catch((err) => console.log(err));
      });
  };

  return (
    <div>
      <h2>Add a Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={post.title} onChange={handleChangeTitle}></input>
        </label>
        <br />
        <label>
          Body:
          <textarea value={post.body} onChange={handleChangeBody}></textarea>
        </label>
        <button type="submit"> Submit </button>
        <button onClick={handleClear}> Cancel </button>
      </form>
    </div>
  );
};

export default AddPosts;
