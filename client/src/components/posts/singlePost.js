const SinglePost = (props) => {
    return (
      <div>
        <h4>Title: {props.post.title}</h4>
        <p>Post ID: {props.post.pid}</p>
        <p>Author: {props.post.author}</p>
        <p>Body: {props.post.body}</p>
        <p>Date Created: {props.post.date_created}</p>
      </div>
    );
  };

  export default SinglePost;

  