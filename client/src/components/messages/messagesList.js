import React, { useContext } from 'react';

import GlobalState from '../utils/context';

import SingleMessage from './singleMessage';

const MessagesList = () => {
  const globalState = useContext(GlobalState);

  const dbProfile = globalState.dbProfileState;
  const messageArr = globalState.messagesState;

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
