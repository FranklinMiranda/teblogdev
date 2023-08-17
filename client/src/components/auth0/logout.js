import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button className="Button" onClick={() => logout({ logoutParams: { returnTo: 'https://timeexpeditions.com' } })}>Log Out</button>;
};

export default LogoutButton;
