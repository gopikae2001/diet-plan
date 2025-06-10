
import React from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import SummaryCards from '../components/SummaryCards';
import DietOrdersTable from '../components/DietOrdersTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <TopBar />
        
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening at your hospital today.</p>
          </div>
          
          <SummaryCards />
          <DietOrdersTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
