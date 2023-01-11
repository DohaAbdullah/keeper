import Header from "../components/header";
import Footer from "../components/footer";
import Note from "../components/note";
import Notes from "../data.json";
import CreateNote from "./createNote";
import { useState } from "react";

function MainPage(props) {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  function addNote(note) {
    setNotes((prev) => [...prev, note]);
  }

  function deleteNote(id){
    console.log("delete");
    setNotes((prev) => prev.filter((noteItem , index ) => index !== id));
  }
  return (
    <div className="container">
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((note , index) => (
        <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default MainPage;
