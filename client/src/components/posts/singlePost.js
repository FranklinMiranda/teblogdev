import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';

const SinglePost = (props) => {
  const globalState = useContext(GlobalState);
  const dbProfile = globalState.dbProfileState;
  const post = globalState.postsState[props.i];

  const [likes, setLikes] = useState(post.liked_by);

  const handleLike = () => {
    setLikes([...likes, dbProfile.username]);
  };

  const data = {
    pid: post.pid,
    liked_by: likes,
  };

  useEffect(() => {
    axios
      .post('/api/post/updatepostlikes', data)
      .then(
        axios
          .post('/api/post/allposts')
          .then((res) => 
          globalState.handleAddPosts(res.data)
          )
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  }, [likes]);

  if (!likes.includes(dbProfile.username)) {
    return (
      <div>
        <li key={post.pid}>
          <h4>Title: {post.title}</h4>
          <p>Post ID: {post.pid}</p>
          <p>Author: {post.author}</p>
          <p>Body: {post.body}</p>
          <p>Date Created: {post.date_created}</p>
          <p>Liked By: {likes}</p>
          <button onClick={handleLike}>Like</button>
        </li>
      </div>
    );
  } else {
    return (
      <div>
        <li key={post.pid}>
          <h4>Title: {post.title}</h4>
          <p>Post ID: {post.pid}</p>
          <p>Author: {post.author}</p>
          <p>Body: {post.body}</p>
          <p>Date Created: {post.date_created}</p>
          <p>Liked By: {likes}</p>
          <button>Unlike</button>
        </li>
      </div>
    );
  }
};

export default SinglePost;
