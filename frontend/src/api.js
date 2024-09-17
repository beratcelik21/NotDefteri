import axios from "axios";

// API URL'sini .env dosyasından alıyoruz
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Axios örneği oluştur
const api = axios.create({
  baseURL: API_URL,
});

// Notları listele
export const getNotes = async () => {
  const response = await api.get("/notes");
  return response.data;
};

// Yeni not ekle
export const addNote = async (note) => {
  const response = await api.post("/notes", note);
  return response.data;
};

// Notu sil
export const deleteNote = async (id) => {
  const response = await api.delete(`/notes/${id}`);
  return response.data;
};

export default api;
