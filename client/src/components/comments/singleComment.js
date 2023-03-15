import React, { useState, useContext } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';

const SingleComment = (props) => {
  const globalState = useContext(GlobalState);
  const [editComment, setEditComment] = useState(false);
  const [comment, setComment] = useState();

  const dbProfile = globalState.dbProfileState;

  const handleEditComment = () => {
    setEditComment(true);
    setComment(props.c.comment)
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      comment: comment,
      cid: props.c.cid,
    };

    axios
      .post('/api/comment/updatecomment', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/comment/allcomments')
          .then((res) => globalState.handleAddComments(res.data))
          .catch((err) => console.log(err));
      });

    setEditComment(false);
  };

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

  if (editComment) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <p>Comment Author: {props.c.author}</p>
          <label>
            Comment:
            <input type="text" value={comment} onChange={handleCommentChange}></input>
          </label>
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  } else if (props.c.author === dbProfile.username) {
    return (
      <div>
        <li>
          <p>Comment ID: {props.c.cid}</p>
          <p>Comment Author: {props.c.author}</p>
          <p>Comment: {props.c.comment}</p>
          <button onClick={handleEditComment}>Edit Comment</button>
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
