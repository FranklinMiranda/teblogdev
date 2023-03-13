import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <h2>User Profile</h2>
        <img src={user.picture} alt={user.name} />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
