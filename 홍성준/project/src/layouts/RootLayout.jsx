import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router';

import Layout from '@/components/Layout';
import { AuthContext, ThemeContext } from '@/context/contexts';

export default function RootLayout() {
  const theme = 'light';
  const currentUser = { name: 'ASD' };
  return (
    <ThemeContext value={theme}>
      <AuthContext value={currentUser}>
        <Layout>
          <ErrorBoundary fallback={<div>⚠️ 오류가 발생했습니다.</div>}>
            <Suspense fallback={<div>로딩 중...</div>}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </Layout>
      </AuthContext>
    </ThemeContext>
  );
}
