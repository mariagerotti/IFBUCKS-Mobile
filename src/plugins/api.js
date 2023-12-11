import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ifbucks.1.ie-1.fl0.io/',
});

export default api