const Note = require("../models/noteModel");

// * Not oluşturma
const createNote = async (req, res) => {
  const { title, content, category, isImportant, tags } = req.body;

  try {
    const newNote = new Note({
      title,
      content,
      category,
      isImportant,
      tags,
      user: req.user._id, // Doğrulanmış kullanıcının ID'si
    });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Not oluşturulamadı", error: error.message });
  }
};
// Notları listeleme
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: "Notlar alınamadı", error: error.message });
  }
};
//Not Guncelleme
const upddateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content, category, isImportant, tags } = req.body;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Not bulunamadı" });
    }

    if (note.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Bu notu güncelleyemezsiniz" });
    }

    // Alanları güncelle
    note.title = title || note.title;
    note.content = content || note.content;
    note.category = category || note.category;
    note.isImportant =
      isImportant !== undefined ? isImportant : note.isImportant;
    note.tags = tags || note.tags;

    const updatedNote = await note.save();
    res.status(200).json(updatedNote);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Not güncellenemedi", error: error.message });
  }
};

// Not silme
const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Not bulunamadı" });
    }
    if (note.user.toString() !== req.user.toString()) {
      return res.status(401).json({ message: "Bu notu silemezsiniz" });
    }

    await note.remove();
    res.status(200).json({ message: "Not silindi" });
  } catch (error) {
    res.status(500).json({ message: "Not Silinemedi", error: error.message });
  }
};

module.exports = { createNote, getNote, upddateNote, deleteNote };
