import axios from 'axios';
import GlobalState from './utils/context';
import React, { useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';



import LogoutButton from './auth0/logout';

const Home = () => {
    const { isAuthenticated, user } = useAuth0();
    const globalState = useContext(GlobalState);

  useEffect(() => {
    if (isAuthenticated) {

      axios.post('/api/userprofiletodb', user).catch((err) => {
        console.log(err);
      });

      axios
        .post('/api/userprofilefromdb', user)
        .then((res) => globalState.handleAddDBProfile(res.data))
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Time Expeditions Blog {user.name}!</h1>
      <LogoutButton />
    </div>
  );
};

export default Home;
