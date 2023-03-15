import React, { useState, useContext } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';

const EditComment = () => {
  const globalState = useContext(GlobalState);

  const commentArr = globalState.commentsState;

  const [id, setId] = useState();
  const [editComment, setEditComment] = useState();

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleIdSubmit = (event) => {
    event.preventDefault();

    const filteredComment = commentArr.filter((c) => {
      return id == c.cid;
    });

    setEditComment(filteredComment[0].comment);
  };

  const handleChangeComment = (event) => {
    setEditComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      comment: editComment,
      cid: id,
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

    setEditComment();
    setId();
  };

  if (!editComment) {
    return (
      <div>
        <p>Edit a Comment</p>
        <p>Id Submitter</p>
        <form onSubmit={handleIdSubmit}>
          <label>
            Id:
            <input type="text" value={id} onChange={handleChangeId}></input>
          </label>
          <button type="submit"> Select Comment </button>
        </form>
      </div>
    );
  } else if (editComment) {
    return (
      <div>
        <p>Comment Editor</p>
        <form onSubmit={handleSubmit}>
          <label>
            Comment:
            <input type="text" value={editComment} onChange={handleChangeComment}></input>
          </label>
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
};

export default EditComment;
