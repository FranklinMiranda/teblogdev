import React, { useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { fetch_posts } from '../store/slices/postsSlice';
import { selectUser } from '../store/slices/userSlice';

const AddPost = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
      .post('/api/posts/posttodb', data)
      .then((res) => {
        {
        }
      })
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/posts/allpostsfromdb')
          .then((res) => dispatch(fetch_posts(res.data)))
          .catch((err) => console.log(err));
      });

    setPost({ title: '', body: '' });
  };

  return (
    <div className="AddPost">
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
        <button className="Button" type="submit">
          {' '}
          Submit{' '}
        </button>
        <button className="Button" onClick={handleClear}>
          {' '}
          Cancel{' '}
        </button>
      </form>
    </div>
  );
};

export default AddPost;
