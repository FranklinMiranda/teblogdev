import React, { useContext } from 'react';

import SingleProfile from './singleProfile';

import { useSelector } from 'react-redux';
import { selectProfiles } from '../store/slices/profilesSlice';


import GlobalState from '../utils/context';

const ProfilesList = () => {
  const globalState = useContext(GlobalState);

  const dbProfile = globalState.dbProfileState;
  const profileArr = useSelector(selectProfiles);

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
