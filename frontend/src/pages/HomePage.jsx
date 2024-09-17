import React, { useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import NoteList from "../components/NoteList";
import { getNotes } from "../api";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [sortOption, setSortOption] = useState("date");

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await getNotes();
      setNotes(notes);
    };
    fetchNotes();
  }, []);
  const sortNotes = (notes) => {
    if (sortOption ==="date") {
        return notes.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
  } else if (sortOption ==="alphabetical") {
    return notes.sort((a,b) => a.title.localCompare(b.title))

  } else if (sortOption ==="category") {
    return notes.sort((a, b) => a.category.localeCompare(b.category))
  }
  return notes;
 
};
return (
    <div className="p-6">
        <h1 className=" text- text-3xl font-bold mb-6 text-center">Not Defteri</h1>
        <div className=" max-w-lg mx-auto mb-6">
            <AddNote onAdd={(newNote) => setNotes([...notes, newNote])} />
        </div>
        <div className="flex justify-end mb-4">
            <select value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className=" p-2 border border-gray-300 rounded">
                <option value="date"> Tarihe Göre Sırala</option>
                <option value="alphabetical">Alfabetik Sırala</option>
                <option value="category">Kategoriye Göre Sırala</option>

            </select>
        </div>
        <NoteList notes={sortNotes(notes)} setNotes={setNotes}/>    
    </div>
)}

export default HomePage;
