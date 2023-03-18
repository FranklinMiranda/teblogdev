import React, { useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { fetch_posts } from '../store/slices/postsSlice';
import { selectUser } from '../store/slices/userSlice';

const AddPosts = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [post, setPost] = useState({ title: '', body: '' });

  const handleChangeTitle = (event) => {
    setPost({ ...post, title: event.target.value });
  };

  const handleChangeBody = (event) => {
    setPost({ ...post, body: event.target.value });
  };

  const handleClear = (event) => {
    event.preventDefault();
    setPost({ title: '', body: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: post.title,
      body: post.body,
      username: user.username,
      uid: user.uid,
    };

    axios
      .post('/api/post/posttodb', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/post/allposts')
          .then((res) => dispatch(fetch_posts(res.data)))
          .catch((err) => console.log(err));
      });

    setPost({ title: '', body: '' });
  };

  return (
    <div>
      <h2>Add a Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={post.title} onChange={handleChangeTitle}></input>
        </label>
        <br />
        <label>
          Body:
          <textarea value={post.body} onChange={handleChangeBody}></textarea>
        </label>
        <button type="submit"> Submit </button>
        <button onClick={handleClear}> Cancel </button>
      </form>
    </div>
  );
};

export default AddPosts;
