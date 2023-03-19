import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectPosts } from '../store/slices/postsSlice';

import SinglePost from './singlePost';
import PaginationControls from '../pagination/paginationControls';

const PostsList = (props) => {
  const postsArr = useSelector(selectPosts);

  const [pageInfo, setPageInfo] = useState({ currentPage: 1, perPage: 10 });

  const user = props.user;

  const postItems = postsArr.reduce((item, p, i) => {
    if (!user) {
      item.push(<SinglePost i={i} />);
      return item;
    }

    if (user.username === p.author) {
      item.push(<SinglePost i={i} />);
    }

    return item;
  }, []);

  const indexOfLastPost = pageInfo.currentPage * pageInfo.perPage;
  const indexOfFirstPost = indexOfLastPost - pageInfo.perPage;
  const currentPosts = postItems.slice(indexOfFirstPost, indexOfLastPost);

  const handleClick = (n) => {
    setPageInfo({ ...pageInfo, currentPage: n });
  };

  return (
    <div className="PostsList">
      <PaginationControls handleClick={handleClick} length={postItems.length} perPage={pageInfo.perPage} />
      <ul>{currentPosts}</ul>
    </div>
  );
};

export default PostsList;
