import { Routes, Route, Link } from 'react-router-dom';

import axios from 'axios';
import GlobalState from './components/utils/context';
import React, { useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Home from './components/links/home';
import Profile from './components/links/profile';
import Posts from './components/links/posts';

function App() {
  const { user } = useAuth0();

  const globalState = useContext(GlobalState);

  useEffect(() => {
    axios
      .post('/api/userprofiletodb', user)
      .then(
        axios
          .post('/api/userprofilefromdb', user)
          .then((res) => globalState.handleAddDBProfile(res.data))
          .catch((err) => {
            console.log(err);
          })
      )
      .catch((err) => {
        console.log(err);
      });

    axios
      .post('/api/post/allposts')
      .then((res) => globalState.handleAddPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
