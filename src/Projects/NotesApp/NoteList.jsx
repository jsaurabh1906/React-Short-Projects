import React from "react";
import Note from "./Note";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="mt-10 mx-auto w-[90%] max-w-5xl">
      {notes.length === 0 ? (
        <p className="text-sm text-center text-indigo-100 font-semibold">
          No Notes Added
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              note={noteItem}
              onEdit={() => onEdit(index)}
              onDelete={() => onDelete(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteList;
