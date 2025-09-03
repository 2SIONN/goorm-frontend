import { useQuery, useQueryClient } from '@tanstack/react-query'
import { me } from '@/api/me.js'
import { token } from '@/api/token.js'

export const useAuth = () => {
  const queryClient = useQueryClient()
  
  const { data, isLoading } = useQuery({
    queryKey: ['me'],
    queryFn: me.get,
    enabled: !!token.get(),
    staleTime: 30_000,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      // 인증 에러의 경우 재시도하지 않음
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return false
      }
      return failureCount < 3
    },
    onError: (error) => {
      // 인증 에러 시 토큰 제거
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        token.clear()
        queryClient.clear()
      }
    },
  })

  const user = data?.data
  const isLoggedIn = !!user && !!token.get()

  // 로그인 후 사용자 정보 설정
  const login = (userInfo) => {
    queryClient.setQueryData(['me'], { data: userInfo })
  }

  return {
    user,
    isLoggedIn,
    isLoading,
    login,
  }
}