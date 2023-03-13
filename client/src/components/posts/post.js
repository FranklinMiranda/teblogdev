import React, { useContext } from 'react';

import GlobalState from '../utils/context';

const SinglePost = () => {
  const globalState = useContext(GlobalState);
  const post1 = globalState.postsState[0]

  return (
    <div> 
      <h2>Last User Post</h2>
      <p>{post1.title}</p>
      <p>{post1.author}</p>
      <p>{post1.body}</p>
      <p>{post1.date_created}</p>
    </div>
  )
}


export default SinglePost;