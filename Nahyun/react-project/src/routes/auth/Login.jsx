import { useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FormInput from '@/components/form/FormInput'
import { auth } from '@/api/auth.js'
import { useAuth } from '@/hooks/useAuth.js'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '123456',
  })

  const loginMutation = useMutation({
    mutationFn: auth.login,
    onSuccess: (response) => {
      login(response.data.user)
      navigate('/my-page')
    },
    onError: (error) => {
      console.error(error)
      alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.')
    },
  })

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setFormData({
        ...formData,
        [name]: value,
      })
    },
    [formData]
  )

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      loginMutation.mutate({
        email: formData.email,
        password: formData.password,
      })
    },
    [formData, loginMutation]
  )

  const isFormValid = useMemo(
    () => formData.email && formData.password,
    [formData.email, formData.password]
  )

  const btnVariant = useMemo(() => (isFormValid ? 'default' : 'outline'), [isFormValid])
  const isLoading = loginMutation.isPending

  return (
    <div className="flex justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="이메일"
              name="email"
              type="email"
              placeholder="email@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />

            <FormInput
              label="비밀번호"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant={btnVariant}
              className="w-full"
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
