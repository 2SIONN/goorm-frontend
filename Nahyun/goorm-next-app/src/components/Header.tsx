import { Menu } from 'lucide-react';
import Link from 'next/link.js';
import { Button } from './ui/button';

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className='flex justify-between items-center h-14 p-4 m-4 bg-white border border-gray-300 rounded-lg'>
      <div className='flex items-center gap-3'>
        <button
          onClick={onMenuClick}
          className='md:hidden p-1 hover:bg-gray-100 rounded-md'
        >
          <Menu className='w-5 h-5' />
        </button>
        <h1 className='text-lg font-semibold text-gray-800'>My APP</h1>
      </div>
      <div className='flex gap-2'>
        <>
          <Button variant='outline' asChild>
            <Link href={'/'}>로그인</Link>
          </Button>
          <Button variant='outline' asChild>
            <Link href={'/'}>회원가입</Link>
          </Button>
        </>
      </div>
    </header>
  );
}
