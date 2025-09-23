export interface User {
  id: string
  name: string
  email: string
  job?: string
  emoji?: string
  updatedAt?: string
}

export interface ProfileUser {
  name: string
  profile: string
  intro: string
  github?: string
  blog?: string
}

export interface Post {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  updatedAt: string
  tags?: string[]
}

export interface GuestbookPost {
  _id: string
  title: string
  body: string
  tags?: string[]
  createdAt: string
}

export interface PostsResponse {
  items: GuestbookPost[]
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface CreatePostPayload {
  title: string
  content: string
  tags?: string[]
}

export interface CreateGuestbookPayload {
  title: string
  body: string
  tags: string[]
}

export interface AuthResponse {
  data: User
}

export interface AuthApiResponse {
  data: {
    user: User
    token?: string
  }
}