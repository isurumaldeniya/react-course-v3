import axios from 'axios'


export const dataFetch = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
  headers: {
    'Accept': 'application/json'
  }
}) 