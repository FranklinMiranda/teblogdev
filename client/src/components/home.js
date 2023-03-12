import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import LoginButton from './login';
import LogoutButton from './logout';
import Profile from './profile';

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Welcome to Time Expeditions Blog!</h1>
        <h2>Please login!</h2>
        <LoginButton />
      </div>
    );
  } else if (isAuthenticated) {
    return (
      <div>
        <BrowserRouter>
          <h1>Welcome to Time Expeditions Blog!</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          <LogoutButton />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};

export default Home;
