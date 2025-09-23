'use client'

import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div className="h-full w-full relative">
      <img
        src="https://res.cloudinary.com/durvfabtg/image/upload/f_auto,q_auto/v1755585802/bg-profile-app_wrp90m.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 rounded"
      />
      <div
        className={`absolute z-10 text-center group ${
          isMobile ? 'bottom-16 left-1/2 transform -translate-x-1/2 px-4' : 'bottom-20 right-50 p-8'
        }`}
      >
        <h1 className={`font-bold text-white drop-shadow-lg ${isMobile ? 'text-xl' : 'text-5xl'}`}>
          먼저{' '}
          <Link
            href="/login"
            className="underline underline-offset-7 hover:text-yellow-200 transition-colors duration-200"
          >
            로그인
          </Link>
          해 주세요
        </h1>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 relative">
          <div className="bg-white/80 rounded-md px-4 py-3 shadow-lg relative">
            <p className="text-sm text-gray-700">
              회원이 아니신가요?{' '}
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
              >
                회원가입 하러 가기
              </Link>{' '}
              💫
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
