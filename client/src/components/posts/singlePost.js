import React, { useState, useContext } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';

import LikePost from './likePost';
import Comments from '../comments/comments';

const SinglePost = (props) => {
  const globalState = useContext(GlobalState);
  const [editPostDisplay, setEditPostDisplay] = useState(false);
  const [editPost, setEditPost] = useState();

  const dbProfile = globalState.dbProfileState;
  const commentsArr = globalState.commentsState;
  const post = globalState.postsState[props.i];

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
      .post('/api/post/updatepost', data)
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
        .post('/api/delete/comment', data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });

    const data = { post_id: post.pid };

    axios
      .post('/api/delete/post', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/post/allposts')
          .then((res) => globalState.handleAddPosts(res.data))
          .catch((err) => console.log(err));
      })
      .then(() => {
        axios
          .post('/api/comment/allcomments')
          .then((res) => globalState.handleAddComments(res.data))
          .catch((err) => console.log(err));
      });
  };

  if (editPostDisplay) {
    return (
      <div>
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
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  } else if (post.author === dbProfile.username) {
    return (
      <div>
        <li key={post.pid}>
          <h4>Title: {post.title}</h4>
          <p>Author: {post.author}</p>
          <p>Body: {post.body}</p>
          <p>Date Created: {post.date_created}</p>
          <LikePost i={props.i} />
          <button onClick={handleEditPostDisplay}>Edit Post</button>
          <button onClick={handleDeletePost}>Delete Post</button>
          <Comments post={post} />
        </li>
      </div>
    );
  } else {
    return (
      <div>
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
