import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use(req => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const login = (formData) => API.post('/auth/login-librarian', formData);

export const getBooks = () => API.get('/books');
export const getBook = (id) => API.get(`/books/${id}`);