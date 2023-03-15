import React, { useContext } from 'react';

import GlobalState from '../utils/context';

const SingleProfile = (props) => {
  const globalState = useContext(GlobalState);

  const profileArr = globalState.profilesState;
  const profile = profileArr[props.i];

  return (
    <div>
      <li>
        <p>Username: {profile.username}</p>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
      </li>
    </div>
  );
};

export default SingleProfile;
