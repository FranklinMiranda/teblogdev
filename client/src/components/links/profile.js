import { useAuth0 } from '@auth0/auth0-react';
import Context from '../utils/context';
import React, { useEffect, useContext } from 'react';


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
    const context = useContext(Context);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{context.dbProfileState.email}</p>

      </div>
    )
  );
};

export default Profile;
