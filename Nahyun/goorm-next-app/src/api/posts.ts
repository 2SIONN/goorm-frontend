import { http } from '@/api/http'

const API_ROOT = process.env.NEXT_PUBLIC_API_URL || ''
const BASE_PATH = '/posts'
const BASE_URL = API_ROOT ? `${API_ROOT}${BASE_PATH}` : BASE_PATH

import { Post, CreatePostPayload } from '@/types'

interface PostsListParams {
  q?: string
  tag?: string
  page?: number
  limit?: number
}

interface UpdatePostPayload {
  title?: string
  content?: string
  tags?: string[]
}

export const postsApi = {
  list: ({ q, tag, page = 1, limit = 100 }: PostsListParams = {}): Promise<Post[]> => {
    const params = new URLSearchParams()
    if (q) {
      params.set('q', q)
    }
    if (tag) {
      params.set('tag', tag)
    }
    params.set('page', String(page))
    params.set('limit', String(limit))

    return http(`${BASE_URL}?${params.toString()}`, { withAuth: false })
  },

  get: (id: string): Promise<Post> => http(`${BASE_URL}/${id}`, { withAuth: false }),

  create: (payload: CreatePostPayload): Promise<Post> =>
    http(BASE_URL, { method: 'POST', body: payload, withAuth: true }),

  update: (id: string, payload: UpdatePostPayload): Promise<Post> =>
    http(`${BASE_URL}/${id}`, { method: 'PATCH', body: payload, withAuth: true }),

  remove: (id: string): Promise<void> =>
    http(`${BASE_URL}/${id}`, { method: 'DELETE', withAuth: true }),
}
