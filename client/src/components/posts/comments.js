import AddComment from './addComment';

const Comments = (props) => {
  return (
    <div>
      <p>Comments</p>
      <AddComment post={props.post} />
    </div>
  );
};

export default Comments;
