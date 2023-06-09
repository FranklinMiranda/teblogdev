import { useAuth0 } from '@auth0/auth0-react';

import LogoutButton from '../auth0/logout';
import Profile from '../auth0/profile';

const Home = () => {
  const { user } = useAuth0();

  return (
    <div className="LinkPage">
      <h1>Welcome to Time Expeditions Blog {user.name}!</h1>
      <Profile />
      <LogoutButton />
    </div>
  );
};

export default Home;
