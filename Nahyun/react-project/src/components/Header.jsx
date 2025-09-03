import { Menu } from 'lucide-react'
import { Button } from './ui/button.jsx'
import { Link, useNavigate } from 'react-router'
import { ROUTES } from '@/lib/routes.js'
import { useAuth } from '@/hooks/useAuth.js'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { auth } from '@/api/auth.js'

export default function Header({ onMenuClick }) {
  const { isLoggedIn, user } = useAuth()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const logoutMutation = useMutation({
    mutationFn: auth.logout,
    onSuccess: () => {
      queryClient.clear()
      navigate(ROUTES.AUTH.LOGIN)
    },
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <header className="flex justify-between items-center h-14 p-4 m-4 bg-white border border-gray-300 rounded-lg">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="md:hidden p-1 hover:bg-gray-100 rounded-md">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">My APP</h1>
      </div>
      <div className="flex gap-2">
        {isLoggedIn ? (
          <div className="px-3 py-1 text-sm font-medium text-gray-800 flex items-center gap-3">
            <span>{user?.name || '사용자'}님</span>
            <span className="text-xs text-gray-500">
              최근접속일자:{' '}
              {user?.updatedAt ? new Date(user.updatedAt).toLocaleDateString('en-CA') : '정보없음'}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              disabled={logoutMutation.isPending}
            >
              {logoutMutation.isPending ? '로그아웃 중...' : '로그아웃'}
            </Button>
          </div>
        ) : (
          <>
            <Button variant="outline" asChild>
              <Link to={ROUTES.AUTH.LOGIN}>로그인</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to={ROUTES.AUTH.REGISTER}>회원가입</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  )
}
