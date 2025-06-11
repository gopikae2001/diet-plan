import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Utensils,
  ClipboardList,
  Package,
  ChevronRight,
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-screen bg-[#0b101a] text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
        <img src="../assets/logo.png" alt="logo" className="h-6 w-6" />
        <span className="text-xl font-semibold text-white">HODO</span>
      </div>

      {/* Search Box */}
      <div className="px-4 py-3">
        <input
          type="text"
          placeholder="Search -- Ctrl + /"
          className="w-full px-3 py-2 rounded bg-[#1a1f2b] text-sm text-white placeholder-gray-400"
        />
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 px-2">
          <li
            className="flex items-center justify-between px-4 py-2 rounded hover:bg-[#1f2b3a] cursor-pointer pb-5 mt-7"
            onClick={() => navigate('/food-items')}
          >
            <div className="flex items-center gap-6">
              <Utensils size={18} />
              <span className="font-medium text-sm text-gray-200">Add Food Item</span>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </li>
          <li
            className="flex items-center justify-between px-4 py-2 rounded hover:bg-[#1f2b3a] cursor-pointer pb-5 mt-7"
            onClick={() => navigate('/diet-plans')}
          >
            <div className="flex items-center gap-3">
              <ClipboardList size={18} />
              <span className="font-medium text-sm text-gray-200">Diet Order Management</span>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </li>
          <li
            className="flex items-center justify-between px-4 py-2 rounded hover:bg-[#1f2b3a] cursor-pointer pb-5 mt-7"
            onClick={() => navigate('/orders')}
          >
            <div className="flex items-center gap-3">
              <Package size={18} />
              <span className="font-medium text-sm text-gray-200">Diet Package Management</span>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </li>
        </ul>
      </nav>
    </div>
   
  );
};

export default Sidebar;
