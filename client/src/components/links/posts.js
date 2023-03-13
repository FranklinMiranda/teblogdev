import React, { useContext, useEffect } from 'react';

import axios from 'axios';
import GlobalState from '../utils/context';

import AddPosts from '../posts/addPost';
//import Post from '../posts/post';

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


  const postArr = globalState.postsState
  const postList = postArr.map((p) => {
    return <li>{p.title}</li>
  })
  

  return (
    <div>
      <h1>Posts</h1>
      <AddPosts />
      <ol>
      {postList}
      </ol>
    </div>
  );
};

export default Posts;

