import { useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FormInput from '@/components/form/FormInput'
import { auth } from '@/api/auth.js'
import { validateRegister } from '@/lib/validators.js'

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })
  const [errors, setErrors] = useState({})

  const registerMutation = useMutation({
    mutationFn: auth.register,
    onSuccess: () => {
      alert('회원가입이 완료되었습니다!')
      setFormData({
        name: '',
        email: '',
        password: '',
        confirm: '',
      })
      setErrors({})
      navigate('/login', { replace: true })
    },
    onError: (error) => {
      console.error(error)
      alert('회원가입에 실패했습니다. 다시 시도해주세요.')
    },
  })

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      const newFormData = {
        ...formData,
        [name]: value,
      }

      setFormData(newFormData)

      const fieldErrors = validateRegister(newFormData)

      setErrors((prev) => {
        const newErrors = { ...prev, [name]: fieldErrors[name] || '' }

        if (name === 'password' || name === 'confirm') {
          newErrors.password = fieldErrors.password || ''
          newErrors.confirm = fieldErrors.confirm || ''
        }

        return newErrors
      })
    },
    [formData]
  )

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }

      registerMutation.mutate(payload)
    },
    [formData, registerMutation]
  )

  const isFormValid = useMemo(
    () =>
      formData.name &&
      formData.email &&
      formData.password &&
      formData.confirm &&
      Object.values(errors).every((error) => !error),
    [formData, errors]
  )

  const btnVariant = useMemo(() => (isFormValid ? 'default' : 'outline'), [isFormValid])
  const isLoading = registerMutation.isPending

  return (
    <div className="flex justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="이름"
              name="name"
              placeholder="이름을 입력해주세요."
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            <FormInput
              label="이메일"
              name="email"
              type="email"
              placeholder="email@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <FormInput
              label="비밀번호"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />

            <FormInput
              label="비밀번호 확인"
              name="confirm"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
              autoComplete="new-password"
              value={formData.confirm}
              onChange={handleChange}
              error={errors.confirm}
            />

            <Button 
              type="submit" 
              variant={btnVariant} 
              className="w-full" 
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? '회원가입 중...' : '회원가입'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
