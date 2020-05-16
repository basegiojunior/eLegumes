import axios from "axios";

const api = axios.create({
  baseURL: "https://www.kdmeulotacao.com.br/api",
  // baseURL: 'https://api-kd-meu-locatao.herokuapp.com',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
