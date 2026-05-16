import axios from 'axios';
//const axios = require('axios'); // legacy way


const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

try {
  const response = await axios.get('http://localhost:3000/users/1');
  console.log(response);
} catch (error) {
  console.error(error);
}

