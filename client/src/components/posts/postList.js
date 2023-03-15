import React, { useContext } from 'react';

import GlobalState from '../utils/context';

import SinglePost from './singlePost';

const PostsList = () => {
  const globalState = useContext(GlobalState);

  const dbProfile = globalState.dbProfileState;
  const postArr = globalState.postsState;
  
  const postItems = postArr.map((p, i) => {
    if (!p.title) {
      return;
    } else if (dbProfile.username !== p.author) {
      return;
    }

    return <SinglePost i={i} />;
  });

  return (
    <div>
      <h2>Previous User Posts</h2>
      <ol>{postItems}</ol>
    </div>
  );
};

export default PostsList;
