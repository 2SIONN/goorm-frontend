import { api } from './http.js'

export const me = {
  get: () => api.get('/me'),
  update: (data) => api.patch('/me', data),
  updatePassword: (data) => api.patch('/me/password', data),
}
