import React, { useContext } from 'react';
import axios from 'axios';

import GlobalState from '../utils/context';
import TextField from '@mui/material/TextField';

const AddPosts = () => {
  const globalState = useContext(GlobalState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user_id = globalState.dbProfileState.uid;
    const username = globalState.dbProfileState.username;

    const data = {
      title: event.target.title.value,
      body: event.target.body.value,
      username: username,
      uid: user_id,
    };

    axios
      .post('/api/post/posttodb', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Add a Post</h1>
      <form onSubmit={handleSubmit}>
        <TextField id="title" label="Title" margin="normal" />
        <br />
        <TextField id="body" label="Body" multiline rowsMax="4" margin="normal" />
        <br />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default AddPosts;
