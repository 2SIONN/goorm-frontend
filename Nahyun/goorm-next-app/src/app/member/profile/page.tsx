'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ProfileCard from '@/components/ProfileCard'

async function fetchUsers() {
  const res = await axios.get('/users.json')
  return res.data
}

import { ProfileUser } from '@/types'

export default function Profile() {
  const { data, isLoading, isError, error } = useQuery<ProfileUser[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60,
  })

  if (isLoading) return <p>로딩중...</p>
  if (isError) return <p>에러 발생: {error?.message}</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 p-8">
      {data?.map((user, index) => (
        <ProfileCard key={index} {...user} />
      ))}
    </div>
  )
}