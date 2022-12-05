
function Note(props) {
  return (
    <div className="note-container">
      <p className="note-title">{props.title}</p>
      <p className="note-content">{props.content}</p>
    </div>
  );
}

export default Note;
