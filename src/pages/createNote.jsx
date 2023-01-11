import { useState } from "react";
import TextArea from "../components/textArea";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "../icons/addicon";


function CreateNote(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

  function handleNoteInputValue(e) {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="add-note-container">
      <form>
        {isExpanded && (
          <TextArea
            className="create-note-textarea"
            placeholder="Title"
            name="title"
            type="text"
            value={note.title}
            onChange={handleNoteInputValue}
          />
        )}

        <TextArea
          className="create-note-textarea"
          placeholder="take a note"
          name="content"
          value={note.content}
          onClick={expand}
          onChange={handleNoteInputValue}
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab
            class="add-note-button"
            onClick={(e) => {
              e.preventDefault();
              props.onAdd(note);
              setNote({ title: "", content: "" });
            }}
            type="submit"
          >
           <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
