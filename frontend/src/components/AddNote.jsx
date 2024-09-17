import React, { useState } from "react";
import { addNote } from "../api";

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      setError("Başlık ve içerik boş bırakılamaz.");
      return;
    }
    const newNote = { title, content, category: "Personal", isImportant: false, tags: [] };
    try {
      const response = await addNote(newNote);
      onAdd(response); // Yeni notu üst bileşene geri döndür
      setTitle("");
      setContent("");
      setError(null);
    } catch (error) {
      console.error("Error adding note:", error);
      setError("Not eklenirken bir hata oluştu.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-lg">
      {error && <p className="text-red-500 mb-3">{error}</p>}
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Başlık"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Not İçeriği"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition duration-200"
      >
        Not Ekle
      </button>
    </form>
  );
};

export default AddNote;
