import React, { useContext } from 'react';

import GlobalState from '../utils/context';

import LikePost from './likePost';
import Comments from '../comments/comments';

const SinglePost = (props) => {
  const globalState = useContext(GlobalState);
  const post = globalState.postsState[props.i];

  return (
    <div>
      <li key={post.pid}>
        <h4>Title: {post.title}</h4>
        <p>Post ID: {post.pid}</p>
        <p>Author: {post.author}</p>
        <p>Body: {post.body}</p>
        <p>Date Created: {post.date_created}</p>
        <LikePost i={props.i} />
        <Comments post={post} />
      </li>
    </div>
  );
};

export default SinglePost;
