import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/users/',
})
export const api2 = axios.create({
  baseURL: 'https://api.github.com/',
})
