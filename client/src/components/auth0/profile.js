import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    axios
      .post('/api/userprofiletodb', user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
