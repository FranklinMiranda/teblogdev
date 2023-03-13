import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import GlobalState from '../utils/context';

const SinglePost = (props) => {
  return (
    <div>
      <h4>Title: {props.post.title}</h4>
      <p>Author: {props.post.author}</p>
      <p>Body: {props.post.body}</p>
      <p>Date Created: {props.post.date_created}</p>
    </div>
  );
};

const PostsList = () => {
  const globalState = useContext(GlobalState);
  const { user } = useAuth0();

  const profile = globalState.dbProfileState
  const postArr = globalState.postsState;
  const postItems = postArr.map((p) => {
    if (!p.title) {
      return
    } else if (profile.email !== user.email) {
      return
    }

    return (
      <li>
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
