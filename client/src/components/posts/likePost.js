import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { fetch_posts, selectPosts } from '../store/slices/postsSlice';
import { selectUser } from '../store/slices/userSlice';

const LikePost = (props) => {
  const dispatch = useDispatch();
  const postsArr = useSelector(selectPosts);
  const user = useSelector(selectUser);

  const post = postsArr[props.i];

  const [likes, setLikes] = useState(post.liked_by);
  const [change, setChange] = useState();

  const handleLike = () => {
    setLikes([...likes, user.username]);
    setChange(true);
  };

  const handleUnlike = () => {
    const newLikes = likes.filter((username) => {
      return username !== user.username;
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
      .post('/api/posts/updatepostlikestodb', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/posts/allpostsfromdb')
          .then((res) => dispatch(fetch_posts(res.data)))
          .catch((err) => console.log(err));
      });
  }, [change]);

  const postLikes = likes.map((like) => {
    return <li>{like}</li>;
  });

  if (!likes.includes(user.username)) {
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
