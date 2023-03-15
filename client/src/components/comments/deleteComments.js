import React, { useState, useContext } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';

const DeleteComment = () => {
  const globalState = useContext(GlobalState);

  const [id, setId] = useState();

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleIdSubmit = (event) => {
    event.preventDefault();

    const data = { cid: id };

    axios
      .post('/api/delete/comment', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/comment/allcomments')
          .then((res) => globalState.handleAddComments(res.data))
          .catch((err) => console.log(err));
      });

    setId('');
  };

  return (
    <div>
      <p>Delete a Comment</p>
      <p>Id Submitter</p>
      <form onSubmit={handleIdSubmit}>
        <label>
          Id:
          <input type="text" value={id} onChange={handleChangeId}></input>
        </label>
        <button type="submit"> Delete Comment </button>
      </form>
    </div>
  );
};

export default DeleteComment;
