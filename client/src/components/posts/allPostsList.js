import React, { useContext } from 'react';

import GlobalState from '../utils/context';

import SinglePost from './singlePost';

const AllPostsList = () => {
  const globalState = useContext(GlobalState);

  const postArr = globalState.postsState;
  const postItems = postArr.map((p) => {
    if (!p.title) {
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
      <h2>All Posts</h2>
      <ol>{postItems}</ol>
    </div>
  );
};

export default AllPostsList;
