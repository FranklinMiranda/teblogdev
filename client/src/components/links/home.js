import { useAuth0 } from '@auth0/auth0-react';

import LogoutButton from '../auth0/logout';
import Profile from './profile';

const Home = () => {
  const { user } = useAuth0();

  return (
    <div>
      <h1>Welcome to Time Expeditions Blog {user.name}!</h1>
      <Profile />
      <LogoutButton />
    </div>
  );
};

export default Home;
