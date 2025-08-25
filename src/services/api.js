import axios from 'axios'
import { API_BASE } from '../utils/constants'
import { useAuth } from '../context/auth'

const api = axios.create({ baseURL: API_BASE })

api.interceptors.request.use((config) => {
  const { token } = useAuth.getState()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export const AuthAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  signup: (payload) => api.post('/auth/signup', payload),
}

export const HealthAPI = {
  vitals: () => api.get('/vitals'),
  alerts: () => api.get('/alerts'),
  addMedication: (payload) => api.post('/medications', payload),
  appointments: () => api.get('/appointments'),
}

export default api