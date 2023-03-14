import React, { useState } from 'react';
import axios from 'axios';

const AddComment = (props) => {
  const [addComment, setAddComment] = useState();

  const post = props.post;

  const handleChangeAddComment = (event) => {
    setAddComment(event.target.value);
  };

  const handleAddCommentSubmit = (event) => {
    event.preventDefault();

    const data = {
      comment: addComment,
      author: post.author,
      uid: post.user_id,
      pid: post.pid,
    };

    axios
      .post('/api/comment/commenttodb', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setAddComment('');
  };

  const handleAddCommentClear = () => {
    setAddComment('');
  };

  return (
    <div>
      <form onSubmit={handleAddCommentSubmit}>
        <label>
          Add a Comment:
          <input type="text" value={addComment} onChange={handleChangeAddComment}></input>
        </label>
        <button type="submit">Submit</button>
        <button onClick={handleAddCommentClear}> Clear</button>
      </form>
    </div>
  );
};

export default AddComment;
