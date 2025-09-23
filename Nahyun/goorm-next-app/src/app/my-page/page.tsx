'use client'

import { Card, CardContent } from '@/components/ui/card'
import FormSelect from '@/components/form/FormSelect'
import FormEmojiPicker from '@/components/form/FormEmojiPicker'
import { useCallback, useState, useMemo, useEffect } from 'react'
import FormInput from '@/components/form/FormInput'
import { me } from '@/api/me'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { validateEditForm } from '@/lib/validators'

const USER = {
  userName: '',
  email: '',
  password: '',
  job: '',
  emoji: '',
}

const INITIAL_FORM = {
  userName: '',
  currentPassword: '',
  password: '',
  confirmPassword: '',
}

const JOBS = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'web-designer', label: 'Web Designer' },
  { value: 'pm', label: 'PM' },
  { value: 'cloud-engineer', label: 'Cloud Engineer' },
]

const EMOJIS = ['👩🏻‍💻', '🧑🏻‍💻', '🎨', '🚀', '☁️']

export default function MyPage() {
  const [userInfo, setUserInfo] = useState({ ...USER })
  const [editForm, setEditForm] = useState({ ...INITIAL_FORM })
  const [editFormErrors, setEditFormErrors] = useState<Record<string, string>>({})
  const [isEditing, setIsEditing] = useState(false)

  const { isLoggedIn, user } = useAuth()
  const queryClient = useQueryClient()

  const updateProfileMutation = useMutation({
    mutationFn: me.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })

      setIsEditing(false)
      alert('회원정보가 수정되었습니다.')
    },
    onError: (error) => {
      console.error('회원정보 수정 실패:', error)
      alert('회원정보 수정에 실패했습니다.')
    },
  })

  const updatePasswordMutation = useMutation({
    mutationFn: me.updatePassword,
    onSuccess: () => {
      setEditForm((prev) => ({
        ...prev,
        currentPassword: '',
        password: '',
        confirmPassword: '',
      }))
      alert('비밀번호가 변경되었습니다.')
    },
    onError: (error) => {
      console.error('비밀번호 변경 실패:', error)
      alert('비밀번호 변경에 실패했습니다.')
    },
  })

  useEffect(() => {
    if (user) {
      setUserInfo((prev) => ({
        ...prev,
        userName: user.name,
        email: user.email,
      }))
      setEditForm((prev) => ({
        ...prev,
        userName: user.name,
      }))
    }
  }, [user])

  useEffect(() => {
    if (!isLoggedIn) {
      setUserInfo({ ...USER })
      setEditForm({ ...INITIAL_FORM })
      setIsEditing(false)
    }
  }, [isLoggedIn])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }) => {
    const { name, value } = e.target

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }, [])

  const handleEditFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target

      const newEditForm = {
        ...editForm,
        [name]: value,
      }

      setEditForm(newEditForm)

      const fieldErrors = validateEditForm(newEditForm)
      setEditFormErrors((prev) => {
        const newErrors = { ...prev, [name]: fieldErrors[name] || '' }

        if (name === 'password' || name === 'confirmPassword' || name === 'currentPassword') {
          newErrors.currentPassword = fieldErrors.currentPassword || ''
          newErrors.password = fieldErrors.password || ''
          newErrors.confirmPassword = fieldErrors.confirmPassword || ''
        }

        return newErrors
      })
    },
    [editForm]
  )

  const handleEditToggle = useCallback(() => {
    if (isEditing) {
      setEditForm({
        userName: userInfo.userName,
        currentPassword: '',
        password: '',
        confirmPassword: '',
      })
      setEditFormErrors({})
    }
    setIsEditing(!isEditing)
  }, [isEditing, userInfo.userName])

  const handleUpdateProfile = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      const fieldErrors = validateEditForm(editForm)
      if (Object.values(fieldErrors).some((error) => error)) {
        setEditFormErrors(fieldErrors)
        return
      }

      try {
        const nameData = { name: editForm.userName }
        await updateProfileMutation.mutateAsync(nameData)

        if (editForm.password) {
          const passwordData = {
            currentPassword: editForm.currentPassword,
            newPassword: editForm.password,
          }
          await updatePasswordMutation.mutateAsync(passwordData)
        }
      } catch (error) {
        console.error('업데이트 실패:', error)
      }
    },
    [editForm, updateProfileMutation, updatePasswordMutation]
  )

  const selectedJobLabel = useMemo(
    () =>
      userInfo.job ? JOBS.find((job) => job.value === userInfo.job)?.label : '직무를 선택해주세요.',
    [userInfo.job]
  )

  const isEditFormValid = useMemo(() => {
    if (!editForm.userName.trim()) return false

    if (editForm.password) {
      if (
        !editForm.currentPassword.trim() ||
        !editForm.password.trim() ||
        !editForm.confirmPassword.trim()
      ) {
        return false
      }
      if (editForm.password !== editForm.confirmPassword) {
        return false
      }
    }

    return Object.values(editFormErrors).every((error) => !error)
  }, [editForm, editFormErrors])

  const editBtnVariant = useMemo(() => (isEditFormValid ? 'default' : 'outline'), [isEditFormValid])

  return (
    <div className="flex flex-col md:flex-row justify-center gap-8">
      <Card className="w-90">
        <CardContent className="flex items-center justify-center h-full">
          {isEditing ? (
            <form className="w-full" onSubmit={handleUpdateProfile}>
              <div className="flex flex-col gap-5">
                <FormInput
                  label="이름"
                  name="userName"
                  value={editForm.userName}
                  placeholder="이름을 입력해주세요."
                  onChange={handleEditFormChange}
                  error={editFormErrors.userName}
                />

                <FormInput
                  label="현재 비밀번호"
                  name="currentPassword"
                  type="password"
                  value={editForm.currentPassword}
                  placeholder="현재 비밀번호를 입력해주세요."
                  onChange={handleEditFormChange}
                  error={editFormErrors.currentPassword}
                />

                <FormInput
                  label="새 비밀번호"
                  name="password"
                  type="password"
                  value={editForm.password}
                  placeholder="새 비밀번호를 입력해주세요."
                  onChange={handleEditFormChange}
                  error={editFormErrors.password}
                />

                <FormInput
                  label="비밀번호 확인"
                  name="confirmPassword"
                  type="password"
                  value={editForm.confirmPassword}
                  placeholder="비밀번호를 다시 입력해주세요."
                  onChange={handleEditFormChange}
                  error={editFormErrors.confirmPassword}
                />

                <div className="flex gap-2">
                  <Button
                    type="submit"
                    variant={editBtnVariant}
                    disabled={
                      !isEditFormValid ||
                      updateProfileMutation.isPending ||
                      updatePasswordMutation.isPending
                    }
                  >
                    {updateProfileMutation.isPending || updatePasswordMutation.isPending
                      ? '저장 중...'
                      : '저장'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleEditToggle}
                    disabled={updateProfileMutation.isPending || updatePasswordMutation.isPending}
                  >
                    취소
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            <form className="w-full">
              <div className="flex flex-col gap-5">
                <FormInput
                  label="이름"
                  name="userName"
                  value={userInfo.userName}
                  placeholder="이름을 입력해주세요."
                  onChange={handleChange}
                />

                <FormInput
                  label="이메일"
                  name="email"
                  type="email"
                  value={userInfo.email}
                  placeholder="이메일을 입력해주세요."
                  onChange={handleChange}
                  disabled
                />

                <FormSelect
                  label="직무"
                  name="job"
                  value={userInfo.job}
                  placeholder="직무를 선택해주세요."
                  options={JOBS}
                  onChange={handleChange}
                />

                <FormEmojiPicker
                  label="이모지"
                  name="emoji"
                  value={userInfo.emoji}
                  emojis={EMOJIS}
                  onChange={handleChange}
                />

                <Button type="button" onClick={handleEditToggle}>
                  회원정보 수정
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>

      <Card className="w-90 h-80">
        <CardContent>
          <div className="flex items-center gap-6 p-2">
            <div className="text-5xl">{userInfo.emoji || '🙋‍♂️'}</div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">
                {(isEditing ? editForm.userName : userInfo.userName) || '이름을 입력해주세요.'}
                {isEditing && <span className="text-sm text-blue-500 ml-2">(수정 중)</span>}
              </h2>
              <span className="text-muted-foreground">
                {userInfo.email || '이메일을 입력해주세요.'}
              </span>
              <p className="text-sm text-muted-foreground mt-1">{selectedJobLabel}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}