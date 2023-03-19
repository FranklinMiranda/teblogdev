import React from 'react';

import { useSelector } from 'react-redux';
import { selectComments } from '../store/slices/commentsSlice';

import SingleComment from './singleComment';

const CommentsList = (props) => {
  const commentsArr = useSelector(selectComments);

  const commentItems = commentsArr.reduce((items, c) => {
    if (c.post_id === props.post.pid) {
      items.push(<SingleComment c={c} />);
    }

    return items;
  }, []);

  return (
    <div className="CommentsList">
      <ul>{commentItems}</ul>
    </div>
  );
};

export default CommentsList;
