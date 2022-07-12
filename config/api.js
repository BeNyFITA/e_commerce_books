
const axios = require('axios');


const api = axios.create(
    {
        baseURL: 'http://localhost/api/livros'
    }
)





module.exports = api;