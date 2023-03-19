import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectProfiles } from '../store/slices/profilesSlice';
import { selectUser } from '../store/slices/userSlice';

import SingleProfile from './singleProfile';
import PaginationControls from '../pagination/paginationControls';

const ProfilesList = () => {
  const profileArr = useSelector(selectProfiles);
  const user = useSelector(selectUser);

  const [pageInfo, setPageInfo] = useState({ currentPage: 1, perPage: 10 });

  const profileItems = profileArr.reduce((item, p, i) => {
    if (user.username !== p.username) {
      item.push(<SingleProfile i={i} />);
    }

    return item;
  },[]);

  const indexOfLastProfile = pageInfo.currentPage * pageInfo.perPage;
  const indexOfFirstProfile = indexOfLastProfile - pageInfo.perPage;
  const currentProfiles = profileItems.slice(indexOfFirstProfile, indexOfLastProfile);

  const handleClick = (n) => {
    setPageInfo({ ...pageInfo, currentPage: n });
  };

  return (
    <div className="ProfilesList">
      <PaginationControls handleClick={handleClick} length={profileItems.length} perPage={pageInfo.perPage} />
      <ul>{currentProfiles}</ul>
    </div>
  );
};

export default ProfilesList;
