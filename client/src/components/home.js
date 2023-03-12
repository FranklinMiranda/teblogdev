import LogoutButton from './auth0/logout';
import Profile from './links/profile';

import Context from './utils/context'
import {useContext} from "react"

const Home = () => {
  const name = useContext(Context)

  return (
    <div>
      <h1>Welcome to Time Expeditions Blog!</h1>
      <h2>{name}</h2>
      <Profile />
      <LogoutButton />
    </div>
  );
};

export default Home;
