import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button className="Button" onClick={() => logout({ logoutParams: { returnTo: 'http://localhost:3000' } })}>Log Out</button>;
};

export default LogoutButton;
