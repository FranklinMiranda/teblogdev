import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login';
import LogoutButton from './logout';
import Profile from './profile';
import { Route, Routes, Link } from 'react-router-dom';

const Home = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();

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
    axios
      .post('/api/userprofiletodb', user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    return (
      <div>
        <h1>Welcome to Time Expeditions Blog!</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
        <LogoutButton />

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>

      </div>
    );
  }
};

export default Home;
