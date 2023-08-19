import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectMessages } from '../store/slices/messagesSlice';
import { selectUser } from '../store/slices/userSlice';

import SingleMessage from './singleMessage';
import PaginationControls from '../pagination/paginationControls';

const MessagesList = () => {
  const user = useSelector(selectUser);
  const messagesArr = useSelector(selectMessages);

  const [pageInfo, setPageInfo] = useState({ currentPage: 1, perPage: 10 });

  const messageItems = messagesArr.reduce((items, m, i) => {
    if (user.username === m.message_to) {
      items.push(<SingleMessage i={i} />);
    }
    return items;
  }, []);

  const indexOfLastMessage = pageInfo.currentPage * pageInfo.perPage;
  const indexOfFirstMessage = indexOfLastMessage - pageInfo.perPage;
  const currentMessages = messageItems.slice(indexOfFirstMessage, indexOfLastMessage);

  const handleClick = (n) => {
    setPageInfo({ ...pageInfo, currentPage: n });
  };

  return (
    <div className="MessagesList">
      <PaginationControls handleClick={handleClick} length={messageItems.length} perPage={pageInfo.perPage} />
      <ul>{currentMessages}</ul>
    </div>
  );
};

export default MessagesList;
