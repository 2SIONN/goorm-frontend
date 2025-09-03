import { api } from './http.js'
import { token } from '@/api/token.js'

export const auth = {
  login: async (payload, opts) => {
    const res = await api.post('/auth/login', payload, { auth: false })
    res.data.token ? token.set(res.data.token) : token.clear()

    return res
  },

  register: async (payload, opts) => {
    const res = await api.post('/auth/register', payload, { auth: false })

    return res
  },

  logout: async () => {
    try {
      await api.post('/auth/logout', {}, { auth: true })
    } finally {
      token.clear()
    }
  },
}
