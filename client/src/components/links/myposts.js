import PostsList from '../posts/postList';
import EditPosts from '../posts/editPosts';
import DeletePost from '../posts/deletePost';

const MyPosts = () => {
  return (
    <div>
      <h1>My Posts</h1>
      <EditPosts />
      <DeletePost/>
      <PostsList />
    </div>
  );
};

export default MyPosts;
