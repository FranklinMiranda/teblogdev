import React from 'react';

import { useSelector } from 'react-redux';
import { selectMessages } from '../store/slices/messagesSlice';
import { selectUser } from '../store/slices/userSlice';

import SingleMessage from './singleMessage';

const MessagesList = () => {
  const dbProfile = useSelector(selectUser);
  const messageArr = useSelector(selectMessages);

  const messageItems = messageArr.map((m, i) => {
    if (dbProfile.username !== m.message_to) {
      return;
    }

    return <SingleMessage i={i} />;
  });

  return (
    <div>
      <ul>{messageItems}</ul>
    </div>
  );
};

export default MessagesList;
