import React, { useState, useContext } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';

const DeletePost = () => {
  const globalState = useContext(GlobalState);

  const [id, setId] = useState();

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleIdSubmit = (event) => {
    event.preventDefault();

    const data = { post_id: id };

    axios
      .post('/api/delete/post', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/post/allposts')
          .then((res) => globalState.handleAddPosts(res.data))
          .catch((err) => console.log(err));
      });
      
    setId('');
  };

  return (
    <div>
      <h2>Delete a Post</h2>
      <h3>Id Submitter</h3>
      <form onSubmit={handleIdSubmit}>
        <label>
          Id:
          <input type="text" value={id} onChange={handleChangeId}></input>
        </label>
        <button type="submit"> Delete Post </button>
      </form>
    </div>
  );
};

export default DeletePost;
