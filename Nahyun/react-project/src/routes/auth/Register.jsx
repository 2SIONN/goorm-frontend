import { useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FormInput from '@/components/form/FormInput'

const validate = (values) => {
  const errors = {}

  if (!values.email.trim()) {
    errors.email = '이메일을 입력해주세요.'
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    errors.email = '올바른 이메일 주소를 입력해주세요.'
  }

  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요.'
  }

  if (!values.confirm) {
    errors.confirm = '비밀번호 확인을 입력해주세요.'
  }

  if (values.password !== values.confirm) {
    errors.confirm = '비밀번호가 일치하지 않습니다.'
  }

  return errors
}

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      const newFormData = {
        ...formData,
        [name]: value,
      }

      setFormData(newFormData)

      const fieldErrors = validate(newFormData)

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

      alert('회원가입이 완료되었습니다!')

      setFormData({
        name: '',
        email: '',
        password: '',
        confirm: '',
      })
      setErrors({})

      navigate('/login')
    },
    [navigate]
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

            <Button type="submit" variant={btnVariant} className="w-full" disabled={!isFormValid}>
              회원가입
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
