import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.180.44.16:3333',
});

export default api;