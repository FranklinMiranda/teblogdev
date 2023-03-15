import React, { useContext } from 'react';

import GlobalState from '../utils/context';

const CommentsList = (props) => {
  const globalState = useContext(GlobalState);
  const commentsArr = globalState.commentsState;

  const postComments = commentsArr.filter((c) => {
    return c.post_id === props.post.pid;
  });

  const list = postComments.map((c) => {
    return (
      <li>
        <p>Comment ID: {c.cid}</p>
        <p>Comment Author: {c.author}</p>
        <p>Comment: {c.comment}</p>
      </li>
    );
  });

  return (
    <div>
      <p>Post Comments</p>
      <ol>{list}</ol>
    </div>
  );
};

export default CommentsList;