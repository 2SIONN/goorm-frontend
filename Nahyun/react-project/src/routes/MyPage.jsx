import { Card, CardContent } from '@/components/ui/card.jsx'
import { FormField } from '@/components/form/FormField.jsx'
import { FormSelect } from '@/components/form/FormSelect.jsx'
import { FormEmojiPicker } from '@/components/form/FormEmojiPicker.jsx'
import { useCallback, useState, useMemo } from 'react'

const USER = {
  userName: '',
  job: '',
  emoji: '',
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

  const handleChange = useCallback((e) => {
    const { name, value } = e.target

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }, [])

  const selectedJobLabel = useMemo(
    () =>
      userInfo.job ? JOBS.find((job) => job.value === userInfo.job)?.label : '직무를 선택해주세요',
    [userInfo.job]
  )

  return (
    <div className="flex flex-col md:flex-row justify-center gap-8">
      <Card className="w-90 h-80">
        <CardContent className="flex items-center justify-center h-full">
          <form className="w-full">
            <div className="flex flex-col gap-5">
              <FormField
                label="이름"
                name="userName"
                value={userInfo.userName}
                placeholder="이름을 입력해 주세요."
                onChange={handleChange}
              />

              <FormSelect
                label="직무"
                name="job"
                value={userInfo.job}
                placeholder="직무를 선택해 주세요."
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
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="w-90 h-80">
        <CardContent>
          <div className="flex items-center gap-6 p-2">
            <div className="text-5xl">{userInfo.emoji || '🙋‍♂️'}</div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">{userInfo.userName || '이름을 입력해주세요'}</h2>
              <p className="text-muted-foreground mt-1">{selectedJobLabel}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
