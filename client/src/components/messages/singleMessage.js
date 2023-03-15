import React, { useContext } from 'react';

import GlobalState from '../utils/context';

const SingleMessage = (props) => {
  const globalState = useContext(GlobalState);
  const message = globalState.messagesState[props.i];

  return (
    <div>
      <li>
        <p>Message Sender: {message.message_sender}</p>
        <p>Message Title: {message.message_title}</p>
        <p>Message Body: {message.message_body}</p>
      </li>
    </div>
  );
};

export default SingleMessage;
