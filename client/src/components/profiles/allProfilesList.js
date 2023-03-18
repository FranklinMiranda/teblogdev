import React from 'react';

import { useSelector } from 'react-redux';
import { selectProfiles } from '../store/slices/profilesSlice';
import { selectUser } from '../store/slices/userSlice';

import SingleProfile from './singleProfile';

const ProfilesList = () => {
  const profileArr = useSelector(selectProfiles);
  const user = useSelector(selectUser);

  const profileItems = profileArr.map((p, i) => {
    if (user.username === p.username) {
      return;
    }

    return <SingleProfile i={i} />;
  });

  return (
    <div className="ProfilesList">
      <ul>{profileItems}</ul>
    </div>
  );
};

export default ProfilesList;
