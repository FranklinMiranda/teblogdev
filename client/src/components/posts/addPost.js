import React, { useState, useContext } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';

const AddPosts = () => {
  const globalState = useContext(GlobalState);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  const handleClear = () => {
    setTitle('');
    setBody('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user_id = globalState.dbProfileState.uid;
    const username = globalState.dbProfileState.username;

    const data = {
      title: title,
      body: body,
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
          <input type="text" value={title} onChange={handleChangeTitle}></input>
        </label>
        <br />
        <label>
          Body:
          <textarea value={body} onChange={handleChangeBody}></textarea>
        </label>
        <button type="submit"> Submit </button>
        <button onClick={handleClear}> Cancel </button>
      </form>
    </div>
  );
};

export default AddPosts;
