import axios from 'axios';

//Configuração base da api
const api = axios.create({
    baseURL: 'http://localhost:5121',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

//Tratamento de erros

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Você pode adicionar tratamento de erros global aqui
    console.error('Erro na requisição:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;