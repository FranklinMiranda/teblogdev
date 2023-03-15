import AddComment from './addComment';
import CommentsList from './commentsList';

const Comments = (props) => {
  return (
    <div>
      <p>Comments</p>
      <AddComment post={props.post} />
      <CommentsList post={props.post} />
    </div>
  );
};

export default Comments;
