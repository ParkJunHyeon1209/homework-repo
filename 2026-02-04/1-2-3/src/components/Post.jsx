export default function Post({ author, content }) {
  return (
    <div className="post-wrap">
      <h3>저자 : {author}</h3>
      <p>내용 : {content}</p>
    </div>
  );
}
