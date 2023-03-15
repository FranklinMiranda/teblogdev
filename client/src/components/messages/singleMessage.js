import React, { useContext } from 'react';
import axios from 'axios'

import GlobalState from '../utils/context';

const SingleMessage = (props) => {
  const globalState = useContext(GlobalState);
  const message = globalState.messagesState[props.i];

  const handleDeleteMessage = () => {
    const data = { mid: message.mid };

    console.log(data)

    axios
      .post('/api/delete/message', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/messages/allmessages')
          .then((res) => globalState.handleAddMessages(res.data))
          .catch((err) => console.log(err));
      });
  };

  return (
    <div>
      <li>
        <p>Message Sender: {message.message_sender}</p>
        <p>Message Title: {message.message_title}</p>
        <p>Message Body: {message.message_body}</p>
        <button onClick={handleDeleteMessage}>Delete Message</button>
      </li>
    </div>
  );
};

export default SingleMessage;
