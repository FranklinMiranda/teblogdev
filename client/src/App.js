import React, { useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import Context from './components/utils/context';

import Home from './components/home';
import LoginPage from './components/loginPage';
import Profile from './components/links/profile';
import Posts from './components/links/posts';

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const context = useContext(Context);

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .post('/api/userprofiletodb', user)
        .then(
          axios
            .get('/api/userprofilefromdb', user)
            .then((res) => context.handleAddDBProfile(res.data))
            .catch((err) => {
              console.log(err);
            })
        )
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  } else if (isAuthenticated) {
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
}

export default App;
