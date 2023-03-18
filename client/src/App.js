import React, { useEffect, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import { useDispatch } from 'react-redux';
import { fetch_user } from './components/store/slices/userSlice';
import { fetch_posts } from './components/store/slices/postsSlice';
import { fetch_profiles } from './components/store/slices/profilesSlice';
import { fetch_comments } from './components/store/slices/commentsSlice';
import { fetch_messages } from './components/store/slices/messagesSlice';

import Home from './components/links/home';
import Profile from './components/links/profile';
import MyPosts from './components/links/myposts';
import MyMessages from './components/links/myMessages';
import AddPosts from './components/posts/addPost';
import AllPosts from './components/links/allposts';
import AllProfiles from './components/links/allProfiles';

function App() {
  const dispatch = useDispatch();

  const { user } = useAuth0();

  useEffect(() => {
    axios
      .post('/api/userprofiletodb', user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        axios
          .post('/api/userprofilefromdb', user)
          .then((res) => dispatch(fetch_user(res.data)))
          .catch((err) => {
            console.log(err);
          });
      });

    axios
      .post('/api/post/allposts')
      .then((res) => {
        dispatch(fetch_posts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post('/api/comment/allcomments')
      .then((res) => {
        dispatch(fetch_comments(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post('/api/profile/allprofiles')
      .then((res) => {
        dispatch(fetch_profiles(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post('/api/messages/allmessages')
      .then((res) => {
        dispatch(fetch_messages(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/myprofile">My Profile</Link>
          </li>
          <li>
            <Link to="/myposts">My Posts</Link>
          </li>
          <li>
            <Link to="/mymessages">My Messages</Link>
          </li>
          <li>
            <Link to="/addpost">Add Posts</Link>
          </li>
          <li>
            <Link to="/allposts">All Posts</Link>
          </li>
          <li>
            <Link to="/allprofiles">All Profiles</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myprofile" element={<Profile />} />
        <Route path="/myposts" element={<MyPosts />} />
        <Route path="/mymessages" element={<MyMessages />} />
        <Route path="/addpost" element={<AddPosts />} />
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="/allprofiles" element={<AllProfiles />} />
      </Routes>
    </div>
  );
}

export default App;
