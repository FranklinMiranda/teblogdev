import axios from 'axios';

import TextField from '@material-ui/core/TextField';

const Posts = () => {



    
  return (
    <div>
      <h1>Posts</h1>
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

export default Posts;
