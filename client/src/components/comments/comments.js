import AddComment from './addComment';
import EditComment from './editComments';
import DeleteComment from './deleteComments';
import CommentsList from './commentsList';


const Comments = (props) => {
  return (
    <div>
      <p>Comments</p>
      <AddComment post={props.post} />
      <EditComment/>
      <DeleteComment/>
      <CommentsList post={props.post} />
    </div>
  );
};

export default Comments;
