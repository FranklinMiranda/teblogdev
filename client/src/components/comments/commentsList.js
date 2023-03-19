import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectComments } from '../store/slices/commentsSlice';

import SingleComment from './singleComment';
import PaginationControls from '../pagination/paginationControls';

const CommentsList = (props) => {
  const commentsArr = useSelector(selectComments);

  const [pageInfo, setPageInfo] = useState({ currentPage: 1, perPage: 10 });

  const commentItems = commentsArr.reduce((items, c) => {
    if (c.post_id === props.post.pid) {
      items.push(<SingleComment c={c} />);
    }

    return items;
  }, []);

  const indexOfLastComment = pageInfo.currentPage * pageInfo.perPage;
  const indexOfFirstComment = indexOfLastComment - pageInfo.perPage;
  const currentPosts = commentItems.slice(indexOfFirstComment, indexOfLastComment);

  const handleClick = (n) => {
    setPageInfo({ ...pageInfo, currentPage: n });
  };

  return (
    <div className="CommentsList">
      <PaginationControls handleClick={handleClick} length={commentItems.length} perPage={pageInfo.perPage} />
      <ul>{currentPosts}</ul>
    </div>
  );
};

export default CommentsList;
