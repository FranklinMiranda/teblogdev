const Post = (post) => {
  <div>
    <h3>{post.title}</h3>
    <h4>{post.author}</h4>
    <p>{post.body}</p>
    <p>{post.date_created}</p>
  </div>;
};

export default Post;
