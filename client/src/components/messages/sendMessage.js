import React, { useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { fetch_messages } from '../store/slices/messagesSlice';
import { selectUser } from '../store/slices/userSlice';

const SendMessage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [displayMessageSender, setDisplayMessageSender] = useState(false);
  const [message, setMessage] = useState({ title: '', body: '' });

  const handleDisplayMessageSender = () => {
    setDisplayMessageSender(true);
  };

  const handleChangeTitle = (event) => {
    setMessage({ ...message, title: event.target.value });
  };

  const handleChangeBody = (event) => {
    setMessage({ ...message, body: event.target.value });
  };

  const handleClear = (event) => {
    event.preventDefault();
    setDisplayMessageSender(false);
    setMessage({ title: '', body: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      message_sender: user.username,
      message_to: props.profile.username,
      message_title: message.title,
      message_body: message.body,
    };

    axios
      .post('/api/messages/messagetodb', data)
      .then((res) => {})
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/messages/allmessagesfromdb')
          .then((res) => dispatch(fetch_messages(res.data)))
          .catch((err) => console.log(err));
      });

    setMessage({ title: '', body: '' });
    setDisplayMessageSender(false);
  };

  if (!displayMessageSender) {
    return (
      <div>
        <button className="Button" onClick={handleDisplayMessageSender}>
          Send Message To: {props.profile.name}
        </button>
      </div>
    );
  } else if (displayMessageSender) {
    return (
      <div className="SendMessage">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={message.title} onChange={handleChangeTitle}></input>
          </label>
          <br />
          <label>
            Body:
            <textarea value={message.body} onChange={handleChangeBody}></textarea>
          </label>
          <button className="Button" type="submit">
            {' '}
            Submit{' '}
          </button>
          <button className="Button" onClick={handleClear}>
            {' '}
            Cancel{' '}
          </button>
        </form>
      </div>
    );
  }
};

export default SendMessage;
