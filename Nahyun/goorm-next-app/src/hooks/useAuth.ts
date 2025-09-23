import { useQuery, useQueryClient } from '@tanstack/react-query'
import { me } from '@/api/me'
import { token } from '@/api/token'
import { User } from '@/types'

import { AuthResponse } from '@/types'

export const useAuth = () => {
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery<AuthResponse>({
    queryKey: ['me'],
    queryFn: me.get,
    enabled: !!token.get(),
    staleTime: 30_000,
    refetchOnWindowFocus: false,
    retry: (failureCount, error: any) => {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return false
      }
      return failureCount < 3
    },
  })

  const user = data?.data
  const isLoggedIn = !!user && !!token.get()

  const login = (userInfo: User) => {
    queryClient.setQueryData(['me'], { data: userInfo })
  }

  return {
    user,
    isLoggedIn,
    isLoading,
    login,
  }
}