import axios, { type AxiosInstance } from 'axios';

const key = "e013dab3"

const BASE_URL = `https://api.hgbrasil.com/finance?${key}`

const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  export default api;