import { api } from './http'
import { token } from '@/api/token'

interface LoginPayload {
  email: string
  password: string
}

interface RegisterPayload {
  name: string
  email: string
  password: string
}

import { AuthApiResponse } from '@/types'

export const auth = {
  login: async (payload: LoginPayload): Promise<AuthApiResponse> => {
    const res: any = await api.post('/auth/login', payload)
    res.data.token ? token.set(res.data.token) : token.clear()

    return res
  },

  register: async (payload: RegisterPayload): Promise<AuthApiResponse> => {
    const res: any = await api.post('/auth/register', payload)

    return res
  },

  logout: async (): Promise<void> => {
    try {
      await api.post('/auth/logout', {})
    } finally {
      token.clear()
    }
  },
}
