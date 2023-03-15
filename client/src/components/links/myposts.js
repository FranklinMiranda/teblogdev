import React, { useContext } from 'react';

import GlobalState from '../utils/context';

import PostsList from '../posts/postList';

const MyPosts = () => {
  const globalState = useContext(GlobalState);

  const dbProfile = globalState.dbProfileState;

  return (
    <div>
      <h1>My Posts</h1>
      <PostsList dbProfile={dbProfile}/>
    </div>
  );
};

export default MyPosts;
