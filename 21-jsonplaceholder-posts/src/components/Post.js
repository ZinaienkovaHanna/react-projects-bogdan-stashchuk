import './Post.css';
function Post(props) {
  const { userId, id, title, body } = props;

  return (
    <div className="post">
      <small>id: {id}</small>
      <h2>title: {title}</h2>
      <p>body: {body}</p>
      <h3>user ID: {userId}</h3>
    </div>
  );
}

export default Post;
