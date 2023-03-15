import React, { useContext } from 'react';

import GlobalState from '../utils/context';

import SinglePost from './singlePost';

const PostsList = (props) => {
  const globalState = useContext(GlobalState);

  const dbProfile = props.dbProfile;

  const postArr = globalState.postsState;

  const postItems = postArr.map((p, i) => {
    if (!dbProfile) {
      if (!p.title) {
        return;
      }

      return <SinglePost i={i} />;
    }

    if (!p.title) {
      return;
    } else if (dbProfile.username !== p.author) {
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
