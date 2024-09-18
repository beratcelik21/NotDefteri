import React, { useState } from "react";
import { addNote } from "../api";

const AddNote = ({ onAdd }) => {
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
    category: "Personal",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [succesMessage, setSuccesMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, content, category } = noteData;

    if (title.trim() === "" || content.trim() === "" || "") {
      setError("Başlık ve içerik boş bırakılamaz.");
      return;
    }
    const newNote = { title, content, category, isImportant: false, tags: [] };
    try {
      setIsLoading(true);
      const response = await addNote(newNote);
      onAdd(response);
      setSuccesMessage("Not başarıyla eklendi!");
      setNoteData({ title: "", content: "", category: "Personal" });
      setError(null);
    } catch (error) {
      setError("Not eklenirken bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} clasName=" bg-white p-4 shadow rounded-lg ">
      {error && <p className="text-red-500 mb-3">{error}</p>}
      {succesMessage && (
        <p className="text-green-500 mb-3 ">{succesMessage} </p>
      )}
      <div className=" mb-4">
        <input
          type="text"
          name="title"
          value={noteData.title}
          onChange={handleChange}
          placeholder="Başlık"
          className="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus: ring-blue-400"
        />
      </div>
      <div className=" mb-4">
        <textarea
          name="content"
          value={noteData.content}
          onChange={handleChange}
          placeholder="Not İçeriği"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus: ring-blue-400"
        />
      </div>
      <div className=" mb-4">
        <select
          name="category"
          value={noteData.category}
          onChange={handleChange}
          placeholder="Başlık"
          className="w-full border border-gray-300 rounded"
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        type="Submit"
        className= {` w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition duration-200  ${ isLoading ? "opacity-50 cursor-not-allowed" : ""  }`}
        disabled={isLoading}
      >
        {isLoading ? "Not Ekleniyor..." : "Not Ekle"}
      </button>
    </form>
  );
};

export default AddNote;
