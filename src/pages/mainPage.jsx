import Header from "../components/header";
import Footer from "../components/footer";
import Note from "../components/note";
import Notes from "../data.json";

function MainPage() {
  return (
    <div>
      <Header />
      {Notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default MainPage;
