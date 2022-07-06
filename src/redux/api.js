import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use(req => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = JSON.parse(localStorage.getItem('profile')).token;
  }
  return req;
});

export const login = (formData) => API.post('/auth/login-librarian', formData);

export const getBooks = () => API.get('/bookTitles');
export const getBook = (id) => API.get(`/bookTitles/${id}`);

export const getLibrarians = () => API.get('/librarians');
export const getLibrarian = (id) => API.get(`/librarians/${id}`);

export const getReaders = () => API.get('/readers');
export const getReader = (id) => API.get(`/readers/${id}`);

export const getBorrowCards = () => API.get('/borrowCards');
export const getBorrowCard = (id) => API.get(`/borrowCards/${id}`);

export const getReturnCards = () => API.get('/returnCards');
export const getReturnCard = (id) => API.get(`/returnCards/${id}`);