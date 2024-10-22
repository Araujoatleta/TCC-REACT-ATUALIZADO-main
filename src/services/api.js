// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // URL do seu backend Spring Boot
});

export default api;