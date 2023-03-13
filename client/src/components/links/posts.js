import AddPosts from '../posts/addPost';
import PostsList from "../posts/postList"
import EditPosts from '../posts/editPosts';

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <AddPosts />
      <PostsList/>
      <EditPosts/>
    </div>
  );
};

export default Posts;
