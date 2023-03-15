import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';

const LikePost = (props) => {
  const globalState = useContext(GlobalState);
  const dbProfile = globalState.dbProfileState;
  const post = globalState.postsState[props.i];

  const [likes, setLikes] = useState(post.liked_by);
  const [change, setChange] = useState();

  const handleLike = () => {
    setLikes([...likes, dbProfile.username]);
    setChange(true);
  };

  const handleUnlike = () => {
    const newLikes = likes.filter((username) => {
      return username !== dbProfile.username;
    });
    setLikes(newLikes);
    setChange(false);
  };

  useEffect(() => {
    const data = {
      pid: post.pid,
      liked_by: likes,
    };

    axios
      .post('/api/post/updatepostlikes', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/post/allposts')
          .then((res) => globalState.handleAddPosts(res.data))
          .catch((err) => console.log(err));
      });
  }, [change]);

  const postLikes = likes.map((like) => {
    return <li>{like}</li>;
  });

  if (!likes.includes(dbProfile.username)) {
    return (
      <div>
        <p>Liked By:</p>
        <ul>{postLikes}</ul>
        <button onClick={handleLike}>Like</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Liked By:</p>
        <ul>{postLikes}</ul>
        <button onClick={handleUnlike}>Unlike</button>
      </div>
    );
  }
};

export default LikePost;
