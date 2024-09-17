import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { deleteNote } from "../api";

const NoteList = ({ notes, setNotes }) => {
  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <>
      {notes.map((note, index) => (
        <Draggable key={note._id} draggableId={note._id} index={index}>
          {(provided) => (
            <div
              className="p-4 bg-white rounded shadow-md border-l-4 border-blue-600"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <div className="mb-2">
                <h3 className="text-xl font-bold text-blue-800">{note.title}</h3>
                <p className="text-gray-600">{note.content}</p>
                <p className="text-sm text-gray-500 mt-2">{new Date(note.createdAt).toLocaleString()}</p>
              </div>
              <button
                onClick={() => handleDelete(note._id)}
                className="text-red-600 hover:underline"
              >
                Sil
              </button>
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default NoteList;
