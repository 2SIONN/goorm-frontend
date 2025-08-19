import { Home, Users, UserPen } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '../lib/utils.js'
import { ROUTES } from '../lib/routes.js'

const items = [
  {
    title: 'Home',
    url: ROUTES.HOME,
    icon: Home,
  },
  {
    title: 'My Page',
    url: ROUTES.MY_PAGE,
    icon: UserPen,
  },
  {
    title: 'Profile',
    url: ROUTES.MEMBER.PROFILE,
    icon: Users,
  },
]

export function SideNavbar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={onClose} />}

      <div
        className={cn(
          'w-48 h-full bg-white border-r border-gray-200 p-4',
          'fixed top-0 left-0 z-50 -translate-x-full transition-transform duration-300',
          'md:static md:translate-x-0',
          isOpen && 'translate-x-0'
        )}
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Menu</h2>

        <nav className="space-y-2">
          {items.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2 rounded-md transition-colors',
                  isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
                )
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
