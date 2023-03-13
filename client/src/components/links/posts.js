import React, { useContext, useEffect } from 'react';

import axios from 'axios';
import GlobalState from '../utils/context';

import AddPosts from '../posts/addPost';

const Posts = () => {
  const globalState = useContext(GlobalState);

  useEffect(() => {
    if (!globalState.postsState) {
      axios
        .post('/api/post/allposts')
        .then((res) => globalState.handleAddPosts(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <AddPosts />
    </div>
  );
};

export default Posts;
