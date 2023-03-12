import LogoutButton from './auth0/logout';
import Profile from './links/profile';

import Context from './utils/context'
import {useContext} from "react"

const Home = () => {
  const context = useContext(Context)

  return (
    <div>
      <h1>Welcome to Time Expeditions Blog!</h1>
      <h2>{context.dbProfileState}</h2>
      <Profile />
      <LogoutButton />
    </div>
  );
};

export default Home;
