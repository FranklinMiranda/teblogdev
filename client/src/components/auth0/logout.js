import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button onClick={() => logout({ logoutParams: { returnTo: 'http://3.80.106.13' } })}>Log Out</button>;
};

export default LogoutButton;
