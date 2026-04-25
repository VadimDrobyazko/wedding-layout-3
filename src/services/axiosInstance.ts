import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})
