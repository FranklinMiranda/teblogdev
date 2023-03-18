import React from 'react';

import { useSelector } from 'react-redux';
import { selectProfiles } from '../store/slices/profilesSlice';

import SendMessage from '../messages/sendMessage';

const SingleProfile = (props) => {
  const profileArr = useSelector(selectProfiles);
  const profile = profileArr[props.i];

  return (
    <div>
      <li>
        <p>Username: {profile.username}</p>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <SendMessage profile={profile} />
      </li>
    </div>
  );
};

export default SingleProfile;
