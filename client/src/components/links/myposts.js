import AddPosts from '../posts/addPost';
import PostsList from '../posts/postList';
import EditPosts from '../posts/editPosts';

const MyPosts = () => {
  return (
    <div>
      <h1>My Posts</h1>
      <AddPosts />
      <EditPosts />
      <PostsList />
    </div>
  );
};

export default MyPosts;
