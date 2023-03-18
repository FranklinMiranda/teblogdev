import React, { useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { fetch_posts, selectPosts } from '../store/slices/postsSlice';
import { fetch_comments, selectComments } from '../store/slices/commentsSlice';
import { selectUser } from '../store/slices/userSlice';

import LikePost from './likePost';
import Comments from '../comments/comments';

const SinglePost = (props) => {
  const dispatch = useDispatch();
  const postsArr = useSelector(selectPosts);
  const commentsArr = useSelector(selectComments);
  const user = useSelector(selectUser);

  const [editPostDisplay, setEditPostDisplay] = useState(false);
  const [editPost, setEditPost] = useState();

  const post = postsArr[props.i];

  const handleEditPostDisplay = () => {
    setEditPostDisplay(true);
    setEditPost(post);
  };

  const handleChangeTitle = (event) => {
    setEditPost({ ...editPost, title: event.target.value });
  };

  const handleChangeBody = (event) => {
    setEditPost({ ...editPost, body: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: editPost.title,
      body: editPost.body,
      uid: editPost.user_id,
      pid: editPost.pid,
      username: editPost.author,
    };

    axios
      .post('/api/posts/updateposttodb', data)
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

    setEditPost();
    setEditPostDisplay(false);
  };

  const handleDeletePost = () => {
    const postComments = commentsArr.filter((c) => {
      return c.post_id == post.pid;
    });

    postComments.forEach((c) => {
      const data = { cid: c.cid };

      axios
        .post('/api/comments/deletecommentfromdb', data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });

    const data = { post_id: post.pid };

    axios
      .post('/api/posts/deletepostfromdb', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/posts/allpostsfromdb')
          .then((res) => dispatch(fetch_posts(res.data)))
          .catch((err) => console.log(err));
      })
      .then(() => {
        axios
          .post('/api/comments/allcommentsfromdb')
          .then((res) => dispatch(fetch_comments(res.data)))
          .catch((err) => console.log(err));
      });
  };

  if (editPostDisplay) {
    return (
      <div className="SingleElement">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={editPost.title} onChange={handleChangeTitle}></input>
          </label>
          <br />
          <label>
            Body:
            <textarea value={editPost.body} onChange={handleChangeBody}></textarea>
          </label>
          <button className="Button" type="submit"> Submit </button>
        </form>
      </div>
    );
  } else if (post.author === user.username) {
    return (
      <div className="SingleElement">
        <li key={post.pid}>
          <h4>Title: {post.title}</h4>
          <p>Author: {post.author}</p>
          <p>Body: {post.body}</p>
          <p>Date Created: {post.date_created}</p>
          <LikePost i={props.i} />
          <button className="Button" onClick={handleEditPostDisplay}>Edit Post</button>
          <button className="Button" onClick={handleDeletePost}>Delete Post</button>
          <Comments post={post} />
        </li>
      </div>
    );
  } else {
    return (
      <div className="SingleElement">
        <li key={post.pid}>
          <h4>Title: {post.title}</h4>
          <p>Author: {post.author}</p>
          <p>Body: {post.body}</p>
          <p>Date Created: {post.date_created}</p>
          <LikePost i={props.i} />
          <Comments post={post} />
        </li>
      </div>
    );
  }
};

export default SinglePost;
