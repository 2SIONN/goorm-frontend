"use client";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { SideNavbar } from "./SideNavbar";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사용자 토글 상태
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // 모바일로 전환될 때 항상 닫힘으로 초기화
  useEffect(() => {
    if (!isDesktop) {
      setIsSidebarOpen(false);
    }
  }, [isDesktop]);

  return (
    <div className='flex h-screen'>
      <SideNavbar
        isOpen={isDesktop ? true : isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className='flex-1 flex flex-col'>
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className='flex-1 overflow-auto p-6'>{children}</main>

        <Footer />
      </div>
    </div>
  );
}
