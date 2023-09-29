import axios from 'axios';

const { MY_IP } = process.env;

const api = axios.create({
  baseURL: `http://${MY_IP}:19006/api/`,
});

export default api;
