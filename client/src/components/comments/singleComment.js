import React, { useContext } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';

const SingleComment = (props) => {
  const globalState = useContext(GlobalState);

  const dbProfile = globalState.dbProfileState;

  const handleDeleteComment = () => {
    const data = { cid: props.c.cid };

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
  };

  if (props.c.author === dbProfile.username) {
    return (
      <div>
        <li>
          <p>Comment ID: {props.c.cid}</p>
          <p>Comment Author: {props.c.author}</p>
          <p>Comment: {props.c.comment}</p>
          <button onClick={handleDeleteComment}>Delete Comment</button>
        </li>
      </div>
    );
  } else {
    return (
      <div>
        <li>
          <p>Comment ID: {props.c.cid}</p>
          <p>Comment Author: {props.c.author}</p>
          <p>Comment: {props.c.comment}</p>
        </li>
      </div>
    );
  }
};

export default SingleComment;
