import React from 'react';

import { useSelector } from 'react-redux';
import { selectPosts } from '../store/slices/postsSlice';

import SinglePost from './singlePost';

const PostsList = (props) => {
  const postsArr = useSelector(selectPosts);
  const user = props.user;

  const postItems = postsArr.map((p, i) => {
    if (!user) {
      return <SinglePost i={i} />;
    }

    if (user.username !== p.author) {
      return;
    }

    return <SinglePost i={i} />;
  });

  return (
    <div>
      <ul>{postItems}</ul>
    </div>
  );
};

export default PostsList;
