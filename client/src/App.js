import { Routes, Route, Link } from 'react-router-dom';

import axios from 'axios';
import GlobalState from './components/utils/context';
import React, { useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Home from './components/links/home';
import Profile from './components/links/profile';
import MyPosts from './components/links/myposts';
import MyMessages from './components/messages/myMessages';
import AddPosts from './components/posts/addPost';
import AllPosts from './components/links/allposts';
import AllProfiles from './components/profiles/allProfiles';

function App() {
  const { user } = useAuth0();

  const globalState = useContext(GlobalState);

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
          .then((res) => globalState.handleAddDBProfile(res.data))
          .catch((err) => {
            console.log(err);
          });
      });

    axios
      .post('/api/post/allposts')
      .then((res) => {
        globalState.handleAddPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post('/api/comment/allcomments')
      .then((res) => {
        globalState.handleAddComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post('/api/profile/allprofiles')
      .then((res) => {
        globalState.handleAddProfiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post('/api/messages/allmessages')
      .then((res) => {
        globalState.handleAddMessages(res.data);
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
