import AddComment from './addComment';
import EditComment from './editComments';
import CommentsList from './commentsList';


const Comments = (props) => {
  return (
    <div>
      <p>Comments</p>
      <AddComment post={props.post} />
      <EditComment/>
      <CommentsList post={props.post} />
    </div>
  );
};

export default Comments;
