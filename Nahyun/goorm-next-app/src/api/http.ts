import axios from 'axios'
import { token } from './token'

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config: any) => {
  const t = token.get()

  if (t && config.auth !== false) {
    config.headers.Authorization = `Bearer ${t}`
  }

  return config
})

api.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

interface HttpOptions {
  method?: string
  body?: any
  withAuth?: boolean
}

interface CustomError extends Error {
  data?: any
  status?: number
}

export async function http(url: string, { method = 'GET', body, withAuth }: HttpOptions = {}): Promise<any> {
  try {
    const config: any = {
      url,
      method,
      data: body,
    }

    if (withAuth !== undefined) {
      config.auth = withAuth
    }

    const res = await api.request(config)
    return res.data
  } catch (err: any) {
    const res = err.response
    const data = res?.data || {}

    const error = new Error(data?.error?.message || data?.message || 'Request failed') as CustomError
    error.data = data
    error.status = res?.status
    throw error
  }
}
