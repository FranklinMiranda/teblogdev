import React, { useContext } from 'react';

import { useSelector } from 'react-redux';
import { selectComments } from '../store/slices/commentsSlice';

import SingleComment from './singleComment';

const CommentsList = (props) => {
  const commentsArr = useSelector(selectComments);

  const postComments = commentsArr.filter((c) => {
    return c.post_id === props.post.pid;
  });

  const commentItems = postComments.map((c) => {
    return <SingleComment c={c} />;
  });

  return (
    <div>
      <ul>{commentItems}</ul>
    </div>
  );
};

export default CommentsList;
