import AddPosts from '../posts/addPost';
import PostsList from "../posts/postList"

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <AddPosts />
      <PostsList/>
    </div>
  );
};

export default Posts;
