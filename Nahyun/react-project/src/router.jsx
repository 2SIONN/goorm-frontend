import { Route, Routes } from 'react-router'
import RootLayout from './layouts/RootLayout.jsx'
import Home from './routes/Home.jsx'
import MyPage from './routes/MyPage.jsx'
import { ROUTES } from './lib/routes.js'
import Login from './routes/auth/Login.jsx'
import Register from './routes/auth/Register.jsx'
import NotFound from './routes/NotFound.jsx'
import { lazy } from 'react'
import Practice from './routes/practice/Practice.jsx'
import Guestbook from './routes/posts/Guestbook.jsx'

const Profile = lazy(() => import('@/routes/member/Profile.jsx'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.MY_PAGE} element={<MyPage />} />
        <Route path={ROUTES.MEMBER.ROOT}>
          <Route path={ROUTES.MEMBER.PROFILE} element={<Profile />} />
        </Route>

        <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
        <Route path={ROUTES.AUTH.REGISTER} element={<Register />} />

        <Route path={ROUTES.GUEST_BOOK} element={<Guestbook />} />
        <Route path={ROUTES.PRACTICE.PRACTICE} element={<Practice />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  )
}
