import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';

import Layout from '@/components/Layout';

export default function RootLayout() {
  return (
    <Layout>
      <ErrorBoundary fallback={<div>⚠️ 오류가 발생했습니다.</div>}>
        <Suspense fallback={<div>로딩 중...</div>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
