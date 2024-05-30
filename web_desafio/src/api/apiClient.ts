// Api que faz a requisição com o back-end
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/enderecos',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;
