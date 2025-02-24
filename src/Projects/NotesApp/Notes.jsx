import React, { useState } from "react";
import Note from "./Note";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

const initialState = {
  title: "",
  content: "",
  date: "",
};

const Notes = () => {
  const [note, setNote] = useState(initialState);
  const [notes, setNotes] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ADD OR UPDATE NOTE
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note.title.trim() || !note.content.trim()) {
      alert("Please fill all the fields");
      return;
    }

    const newNote = {
      ...note,
      date: new Date().toLocaleDateString(),
    };

    // Check if the user is editing a note
    if (isEditing) {
      // Update the notes state with the new note at the edit index
      setNotes((prev) => {
        return prev.map((item, index) =>
          index === editIndex ? newNote : item
        );
      });
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setNotes((prev) => [...prev, newNote]);
    }

    // Reset the form after submission
    setNote(initialState);
    setIsExpanded(false);
  };

  // HANDLE EDIT
  const handleEdit = (index) => {
    if (notes[index]) {
      const noteToEdit = notes[index];
      setNote(noteToEdit);
      setIsExpanded(true);
      setIsEditing(true);
      setEditIndex(index);
    }
  };

  //HANDLE DELETE
  const handleDelete = (index) => {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main className="h-screen max-h-screen overflow-y-auto bg-indigo-800 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]">
      <NoteForm
        note={note}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isEditing={isEditing}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      <NoteList notes={notes} onEdit={handleEdit} onDelete={handleDelete} />
      {/* Notes List */}
    </main>
  );
};

export default Notes;
