import { QueryClient } from '@tanstack/react-query'

interface ErrorWithStatus {
  status?: number
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      gcTime: 5 * 60000,
      retry: (failCount: number, err: unknown) => {
        const error = err as ErrorWithStatus
        return error?.status === 401 ? false : failCount < 2
      },
      refetchOnWindowFocus: true,
    },

    mutations: {
      retry: 0,
    },
  },
})
