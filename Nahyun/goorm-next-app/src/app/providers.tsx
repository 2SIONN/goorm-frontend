'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense, useState } from 'react'
import Layout from '@/components/Layout'

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60000,
        gcTime: 5 * 60000,
        retry: (failCount: number, err: unknown) => {
          const error = err as { status?: number }
          return error?.status === 401 ? false : failCount < 2
        },
        refetchOnWindowFocus: true,
      },
      mutations: {
        retry: 0,
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <ErrorBoundary fallback={<p>오류가 발생했습니다.</p>}>
          <Suspense fallback={<div className="p-6">로딩중...</div>}>
            {children}
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </QueryClientProvider>
  )
}