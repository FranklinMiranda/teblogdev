import React from 'react';

import SingleProfile from './singleProfile';

import { useSelector } from 'react-redux';
import { selectProfiles } from '../store/slices/profilesSlice';
import { selectUser } from '../store/slices/userSlice';

const ProfilesList = () => {
  const user = useSelector(selectUser);
  const profileArr = useSelector(selectProfiles);

  const profileItems = profileArr.map((p, i) => {
    if (user.username === p.username) {
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
