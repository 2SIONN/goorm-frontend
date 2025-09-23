import { createContext, useContext, useState, useEffect } from 'react'
import { token } from '@/api/token.js'
import { me } from '@/api/me.js'

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth는 AuthProvider 내에서 사용해야 합니다.')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const isLoggedIn = user !== null

  const checkAuthStatus = async () => {
    const userToken = token.get()
    if (userToken) {
      try {
        const userInfo = await me.get()
        setUser(userInfo.data)
      } catch (error) {
        console.error('사용자 정보 조회 실패:', error)
        setUser(null)
        token.remove()
      }
    } else {
      setUser(null)
    }
    setIsLoading(false)
  }

  const login = async (userInfo) => {
    setUser(userInfo)
  }

  const logout = () => {
    token.clear()
    setUser(null)
  }

  const updateUser = (updatedUserInfo) => {
    setUser(updatedUserInfo)
  }

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const value = {
    isLoggedIn,
    user,
    isLoading,
    login,
    logout,
    checkAuthStatus,
    updateUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}