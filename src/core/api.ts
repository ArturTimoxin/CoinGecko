import axios from 'axios';
import { API_URL } from './environment';

const API = axios.create({
  baseURL: API_URL,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
