import { useEffect, useState } from 'react'
import ProfileCard from '@/components/ProfileCard.jsx'

export default function Profile() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('데이터 로드 실패:', error))
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 p-8">
      {users.map((user, index) => (
        <ProfileCard key={index} {...user} />
      ))}
    </div>
  )
}
