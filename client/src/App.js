import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import { useDispatch } from 'react-redux';
import { fetch_user } from './components/store/slices/userSlice';
import { fetch_posts } from './components/store/slices/postsSlice';
import { fetch_comments } from './components/store/slices/commentsSlice';
import { fetch_profiles } from './components/store/slices/profilesSlice';
import { fetch_messages } from './components/store/slices/messagesSlice';

import Home from './components/links/home';
import MyProfile from './components/links/myProfile';
import MyPosts from './components/links/myPosts';
import MyMessages from './components/links/myMessages';
import CreatePost from './components/links/createPost';
import AllPosts from './components/links/allPosts';
import AllProfiles from './components/links/allProfiles';

function App() {
  const dispatch = useDispatch();

  const { user } = useAuth0();

  useEffect(() => {
    axios
      .post('/api/user/profiletodb', user)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        axios
          .post('/api/user/profilefromdb', user)
          .then((res) => dispatch(fetch_user(res.data)))
          .catch((err) => {
            console.log(err);
          });
      });

    axios
      .post('/api/posts/allpostsfromdb')
      .then((res) => {
        dispatch(fetch_posts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post('/api/comments/allcommentsfromdb')
      .then((res) => {
        dispatch(fetch_comments(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post('/api/profiles/allprofilesfromdb')
      .then((res) => {
        dispatch(fetch_profiles(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post('/api/messages/allmessagesfromdb')
      .then((res) => {
        dispatch(fetch_messages(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <nav className="NavBar">
        <ul>
          <li>
            <Link className="Link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Link" to="/myprofile">
              My Profile
            </Link>
          </li>
          <li>
            <Link className="Link" to="/myposts">
              My Posts
            </Link>
          </li>
          <li>
            <Link className="Link" to="/mymessages">
              My Messages
            </Link>
          </li>
          <li>
            <Link className="Link" to="/createpost">
              Create A Post
            </Link>
          </li>
          <li>
            <Link className="Link" to="/allposts">
              All Posts
            </Link>
          </li>
          <li>
            <Link className="Link" to="/allprofiles">
              All Profiles
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myposts" element={<MyPosts />} />
        <Route path="/mymessages" element={<MyMessages />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="/allprofiles" element={<AllProfiles />} />
      </Routes>
    </div>
  );
}

export default App;
