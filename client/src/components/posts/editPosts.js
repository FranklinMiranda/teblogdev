import React, { useState, useContext } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';

const EditPosts = () => {
  const globalState = useContext(GlobalState);
  const postArr = globalState.postsState;

  const [id, setId] = useState();
  const [editPost, setEditPost] = useState();

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleIdSubmit = (event) => {
    event.preventDefault();

    let filteredPost = postArr.filter((p) => {
      return id == p.pid;
    });

    setEditPost(...filteredPost);
  };

  const handleChangeTitle = (event) => {
    setEditPost({ ...editPost, title: event.target.value });
  };

  const handleChangeBody = (event) => {
    setEditPost({ ...editPost, body: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: editPost.title,
      body: editPost.body,
      uid: editPost.user_id,
      pid: editPost.pid,
      username: editPost.author,
    };

    axios.post('/api/post/updatepost', data).catch((err) => console.log(err));

    setEditPost();
    setId();
  };

  if (!editPost) {
    return (
      <div>
        <h2>Edit a Post</h2>
        <h3>Id Submitter</h3>
        <form onSubmit={handleIdSubmit}>
          <label>
            Id:
            <input type="text" value={id} onChange={handleChangeId}></input>
          </label>
          <button type="submit"> Select Post </button>
        </form>
      </div>
    );
  } else if (editPost) {
    return (
      <div>
        <h3>Post Editor</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={editPost.title} onChange={handleChangeTitle}></input>
          </label>
          <br />
          <label>
            Body:
            <textarea value={editPost.body} onChange={handleChangeBody}></textarea>
          </label>
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
};

export default EditPosts;