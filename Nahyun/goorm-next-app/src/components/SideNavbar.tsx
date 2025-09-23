"use client";

import { Home, Users, UserPen, Pen, Book, MessageSquare } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "My Page",
    url: "/my-page",
    icon: UserPen,
  },
  {
    title: "Profile",
    url: "/member/profile",
    icon: Users,
  },
  {
    title: "About",
    url: "/about",
    icon: Book,
  },
  {
    title: "Practice",
    url: "/practice",
    icon: Pen,
  },
  {
    title: "Guestbook",
    url: "/guestbook",
    icon: MessageSquare,
  },
];

interface SideNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideNavbar({ isOpen, onClose }: SideNavbarProps) {
  const pathname = usePathname();
  return (
    <>
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/30 z-40 md:hidden'
          onClick={onClose}
        />
      )}

      <div
        className={cn(
          'w-48 h-full bg-white border-r border-gray-200 p-4',
          'fixed top-0 left-0 z-50 -translate-x-full transition-transform duration-300',
          'md:static md:translate-x-0',
          isOpen && 'translate-x-0'
        )}
      >
        <h2 className='text-lg font-semibold mb-4 text-gray-800'>Menu</h2>

        <nav className="space-y-2">
          {items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link
                key={item.title}
                href={item.url}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
