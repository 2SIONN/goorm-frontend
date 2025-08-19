import { faCloud } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Home, User, Users } from 'lucide-react';
import { NavLink } from 'react-router';
import { twJoin } from 'tailwind-merge';

import { ROUTES } from '@/lib/routes';

const items = [
  {
    title: 'Home',
    url: ROUTES.HOME,
    icon: Home,
  },
  {
    title: 'My Page',
    url: ROUTES.MYPAGE,
    icon: User,
  },
  {
    title: 'Profile',
    url: ROUTES.MEMBER.PROFILE,
    icon: Users,
  },
];

const STYLE =
  'cursor-pointer w-full rounded-xs p-2 transition duration-150 hover:bg-gray-300 flex items-center';

export default function Sidebar({ sidebarOpen, handleClose }) {
  return (
    <>
      {sidebarOpen && (
        <div className="fixed top-0 w-screen h-screen bg-black opacity-25" onClick={handleClose} />
      )}
      <aside
        className={twJoin(
          `fixed top-0 min-w-screen sm:min-w-xs h-screen 
          border-r-2 bg-white p-2 
          duration-250 ease-linear`,
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <nav>
          <div className="flex justify-between items-center p-2">
            <div className="flex items-center font-bold">
              <span className="text-sky-500 text-2xl mr-2">
                <FontAwesomeIcon icon={faCloud} />
              </span>
              구름 프론트엔드 5회차
            </div>
            <button
              className="hover:cursor-pointer hover:text-red-500 duration-150 ease-in px-1 sm:hidden"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>
          <ul>
            {items.map((item) => (
              <li key={item.title}>
                <NavLink to={item.url} className={STYLE} onClick={handleClose}>
                  <item.icon className="mr-4" />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
