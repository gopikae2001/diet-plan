import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-y-auto bg-[#f4f6f9] p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
