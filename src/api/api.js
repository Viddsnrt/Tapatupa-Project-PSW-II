import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // cukup ke /api saja
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
