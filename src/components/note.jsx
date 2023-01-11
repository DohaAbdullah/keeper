import Button from "./button";

function Note(props) {
  return (
    <div className="note-container">
      <p className="note-title">{props.title}</p>
      <p className="note-content">{props.content}</p>
      <Button
        className="delete-note-button"
        onClick={(e) => {
          e.preventDefault();
          props.onDelete(props.id);
        }}
      >
        DELETE
      </Button>
    </div>
  );
}

export default Note;
