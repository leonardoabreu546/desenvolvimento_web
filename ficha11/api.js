// api.js
const api = axios.create({
    baseURL: 'http://localhost:3000'
});

// Este "Interceptor" corre antes de CADA pedido que o axios fizer
api.interceptors.request.use(config => {
    const token = localStorage.getItem('meu_token');
    if (token) {
        // Se houver token, adiciona-o ao cabeçalho Authorization
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});