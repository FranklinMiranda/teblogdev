import React, { useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { fetch_comments } from '../store/slices/commentsSlice';
import { selectUser } from '../store/slices/userSlice';

const SingleComment = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [editComment, setEditComment] = useState(false);
  const [comment, setComment] = useState();

  const handleEditComment = () => {
    setEditComment(true);
    setComment(props.c.comment);
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
      .post('/api/comments/updatecommenttodb', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/comments/allcommentsfromdb')
          .then((res) => dispatch(fetch_comments(res.data)))
          .catch((err) => console.log(err));
      });

    setComment();
    setEditComment(false);
  };

  const handleDeleteComment = () => {
    const data = { cid: props.c.cid };

    axios
      .post('/api/comments/deletecommentfromdb', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/comments/allcommentsfromdb')
          .then((res) => dispatch(fetch_comments(res.data)))
          .catch((err) => console.log(err));
      });
  };

  if (editComment) {
    return (
      <div className="SingleElement">
        <form onSubmit={handleSubmit}>
          <p>Comment Author: {props.c.author}</p>
          <label>
            Comment:
            <input type="text" value={comment} onChange={handleCommentChange}></input>
          </label>
          <button className="Button" type="submit"> Submit </button>
        </form>
      </div>
    );
  } else if (props.c.author === user.username) {
    return (
      <div className="SingleElement">
        <li>
          <p>Comment Author: {props.c.author}</p>
          <p>Comment: {props.c.comment}</p>
          <button className="Button" onClick={handleEditComment}>Edit Comment</button>
          <button className="Button" onClick={handleDeleteComment}>Delete Comment</button>
        </li>
      </div>
    );
  } else {
    return (
      <div className="SingleElement">
        <li>
          <p>Comment Author: {props.c.author}</p>
          <p>Comment: {props.c.comment}</p>
        </li>
      </div>
    );
  }
};

export default SingleComment;
