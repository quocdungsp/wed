import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: { 'X-Custom-Header': 'foobar' },
});

export default request;
