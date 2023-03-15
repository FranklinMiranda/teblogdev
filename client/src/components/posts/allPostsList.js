import React, { useContext } from 'react';

import GlobalState from '../utils/context';

import SinglePost from './singlePost';

const AllPostsList = () => {
  const globalState = useContext(GlobalState);

  const postArr = globalState.postsState;
  const postItems = postArr.map((p, i) => {
    if (!p.title) {
      return;
    }

    return <SinglePost i={i} />;
  });

  return (
    <div>
      <ol>{postItems}</ol>
    </div>
  );
};

export default AllPostsList;
