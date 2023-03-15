import React, { useContext } from 'react';

import SingleProfile from './singleProfile';

import GlobalState from '../utils/context';

const ProfilesList = () => {
  const globalState = useContext(GlobalState);

  const dbProfile = globalState.dbProfileState;
  const profileArr = globalState.profilesState;

  const profileItems = profileArr.map((p, i) => {
    if (dbProfile.username === p.username) {
      return;
    }

    return <SingleProfile i={i} />;
  });

  return (
    <div>
      <ul>{profileItems}</ul>
    </div>
  );
};

export default ProfilesList;
