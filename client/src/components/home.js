import React from 'react';

import LogoutButton from './auth0/logout';
import Profile from './auth0/profile';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Time Expeditions Blog!</h1>
      <Profile />
      <LogoutButton />
    </div>
  );
};

export default Home;
