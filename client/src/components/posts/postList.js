import React, { useContext } from 'react';

import GlobalState from '../utils/context';

import SinglePost from './singlePost';

const PostsList = () => {
  const globalState = useContext(GlobalState);

  const profile = globalState.dbProfileState;
  const postArr = globalState.postsState;
  const postItems = postArr.map((p) => {
    if (!p.title) {
      return;
    } else if (profile.username !== p.author) {
      return;
    }

    return (
      <li key={p.pid}>
        <SinglePost post={p} />
      </li>
    );
  });

  return (
    <div>
      <h2>Previous User Posts</h2>
      <ol>{postItems}</ol>
    </div>
  );
};

export default PostsList;
