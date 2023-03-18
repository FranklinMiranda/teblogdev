import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { fetch_messages, selectMessages } from '../store/slices/messagesSlice';

const SingleMessage = (props) => {
  const dispatch = useDispatch();
  const messagesArr = useSelector(selectMessages);

  const message = messagesArr[props.i];

  const handleDeleteMessage = () => {
    const data = { mid: message.mid };

    axios
      .post('/api/delete/message', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .then(() => {
        axios
          .post('/api/messages/allmessages')
          .then((res) => dispatch(fetch_messages(res.data)))
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
