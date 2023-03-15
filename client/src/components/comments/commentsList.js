import React, { useContext } from 'react';

import GlobalState from '../utils/context';

import SingleComment from './singleComment';

const CommentsList = (props) => {
  const globalState = useContext(GlobalState);
  const commentsArr = globalState.commentsState;

  const postComments = commentsArr.filter((c) => {
    return c.post_id === props.post.pid;
  });

  const commentItems = postComments.map((c) => {
    return <SingleComment c={c} />;
  });

  return (
    <div>
      <ol>{commentItems}</ol>
    </div>
  );
};

export default CommentsList;
