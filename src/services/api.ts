import axios from "axios";

const api = axios.create({
  baseURL: "https://api-elegumes.herokuapp.com/",
  // baseURL: 'https://api-kd-meu-locatao.herokuapp.com',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
