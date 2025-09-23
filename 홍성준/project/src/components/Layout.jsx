import { useState } from 'react';

// import { AppSidebar } from "./AppSidebar";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
// import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleOpen = () => {
    setSidebarOpen(true);
    document.body.classList.add('overflow-y-hidden');
  };
  const handleClose = () => {
    setSidebarOpen(false);
    document.body.classList.remove('overflow-y-hidden');
  };
  return (
    <div className="w-full">
      <Header handleOpen={handleOpen} handleClose={handleClose} />
      <Sidebar sidebarOpen={sidebarOpen} handleClose={handleClose} />
      {/* <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
        </main>
      </SidebarProvider> */}
      {children}
      <Footer />
    </div>
  );
}
