import React from 'react';

import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/userSlice';

import PostsList from '../posts/postList';

const MyPosts = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>My Posts</h1>
      <PostsList user={user} />
    </div>
  );
};

export default MyPosts;
