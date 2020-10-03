import axios from 'axios';

const api = axios.create({
    baseURL: 'http://4ab3c288b200.ngrok.io',
})

export default api;