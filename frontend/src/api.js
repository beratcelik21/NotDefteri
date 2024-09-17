import axios from 'axios';

// API URL'sini .env dosyasından alıyoruz
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Axios örneği oluştur
const api = axios.create({
  baseURL: API_URL,
});

// Kullanıcı giriş yapma
export const loginUser = async (credentials) => {
  const { data } = await api.post('/auth/login', credentials);
  return data;
};

// Kullanıcı kayıt olma
export const registerUser = async (credentials) => {
  const { data } = await api.post('/auth/register', credentials);
  return data;
};

// Notları listeleme
export const getNotes = async () => {
  const token = localStorage.getItem('token');
  const { data } = await api.get('/notes', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Yeni not ekleme
export const addNote = async (note) => {
  const token = localStorage.getItem('token');
  const { data } = await api.post('/notes', note, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Notu silme
export const deleteNote = async (id) => {
  const token = localStorage.getItem('token');
  const { data } = await api.delete(`/notes/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export default api;
