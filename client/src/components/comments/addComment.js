import React, { useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { fetch_comments } from '../store/slices/commentsSlice';
import { selectUser } from '../store/slices/userSlice';

const AddComment = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [addComment, setAddComment] = useState();

  const post = props.post;

  const handleChangeAddComment = (event) => {
    setAddComment(event.target.value);
  };

  const handleAddCommentSubmit = (event) => {
    event.preventDefault();

    const data = {
      comment: addComment,
      author: user.username,
      uid: post.user_id,
      pid: post.pid,
    };

    axios
      .post('/api/comments/commenttodb', data)
      .then((res) => {})
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/comments/allcommentsfromdb')
          .then((res) => {
            dispatch(fetch_comments(res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      });

    setAddComment('');
  };

  const handleAddCommentClear = (event) => {
    event.preventDefault();
    setAddComment('');
  };

  return (
    <div className="AddComment">
      <form onSubmit={handleAddCommentSubmit}>
        <label>
          Add a Comment:
          <input type="text" value={addComment} onChange={handleChangeAddComment}></input>
        </label>
        <button className="Button" type="submit">
          Submit
        </button>
        <button className="Button" onClick={handleAddCommentClear}>
          {' '}
          Clear
        </button>
      </form>
    </div>
  );
};

export default AddComment;
