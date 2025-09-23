import { api } from './http'
import { User } from '@/types'

interface UpdateProfileData {
  name: string
}

interface UpdatePasswordData {
  currentPassword: string
  newPassword: string
}

interface MeResponse {
  data: User
}

export const me = {
  get: (): Promise<MeResponse> => api.get('/me'),
  update: (data: UpdateProfileData): Promise<MeResponse> => api.patch('/me', data),
  updatePassword: (data: UpdatePasswordData): Promise<void> => api.patch('/me/password', data),
}
