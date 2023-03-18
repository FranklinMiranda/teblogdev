import React from 'react';

import { useSelector } from 'react-redux';
import { selectMessages } from '../store/slices/messagesSlice';
import { selectUser } from '../store/slices/userSlice';

import SingleMessage from './singleMessage';

const MessagesList = () => {
  const user = useSelector(selectUser);
  const messagesArr = useSelector(selectMessages);

  const messageItems = messagesArr.map((m, i) => {
    if (user.username !== m.message_to) {
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
