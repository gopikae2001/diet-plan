
// import React from 'react';
// import { Search, Bell } from 'lucide-react';

// const TopBar = () => {
//   return (
//     <div className="bg-white border-b border-gray-200 px-6 py-4">
//       <div className="flex items-center justify-between">
//         <div className="flex-1 max-w-md">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search patients, diet plans..."
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//         </div>
        
//         <div className="flex items-center space-x-4">
//           <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
//             <Bell className="w-6 h-6" />
//             <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
//           </button>
          
//           <div className="flex items-center space-x-3">
//             <div className="text-right">
//               <p className="text-sm font-medium text-gray-900">Dr. Manu</p>
//               <p className="text-xs text-gray-500">System Admin</p>
//             </div>
//             <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
//               <span className="text-white font-medium text-sm">DM</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;


import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const TopNavbar: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 bg-[#0b101a] text-white shadow-sm">
      {/* Left Navigation */}
      <div className="flex items-center gap-6">
        {/* <div className="text-2xl font-bold text-blue-500">🟰</div> */}
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-blue-400">Dashboard</a>
          <a href="#" className="hover:text-blue-400">Billing</a>
          <a href="#" className="hover:text-blue-400">Pharmacy</a>
          <a href="#" className="hover:text-blue-400">Appointments</a>
          <div className="relative group">
            <button className="hover:text-blue-400">More ▾</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow z-10">
              <a href="#" className="block px-4 py-1 hover:bg-gray-200">Settings</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200">Reports</a>
            </div>
          </div>
        </nav>
      </div>

      {/* Right Search & Actions */}
      <div className="flex items-center gap-2">
        <Input
          className="w-72 text-black"
          placeholder="Search Patient with Name or Card No. or Mobile"
        />
        <Button className="bg-teal-500 hover:bg-teal-600 text-white">New Sale</Button>
        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">+ Add Patient</Button>
        <button className="p-2 hover:text-blue-400">
          <Search size={20} />
        </button>
        <button className="p-2 hover:text-blue-400">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:text-blue-400">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;

