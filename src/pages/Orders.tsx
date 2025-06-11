
// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import TopBar from '../components/TopBar';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Label } from '../components/ui/label';
// import { Plus, CheckCircle, Clock, UserCheck } from 'lucide-react';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '../components/ui/dialog';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '../components/ui/table';

// const Orders = () => {
//   const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('pending');
//   const [orders, setOrders] = useState([
//     {
//       id: 1,
//       patientName: 'John Doe',
//       patientId: 'P001',
//       doctorName: 'Dr. Smith',
//       dietPlan: 'Diabetic Diet Plan',
//       status: 'pending',
//       requestDate: '2024-01-15',
//       rate: 350,
//       notes: 'Patient is diabetic, requires low sugar diet'
//     },
//     {
//       id: 2,
//       patientName: 'Jane Smith',
//       patientId: 'P002',
//       doctorName: 'Dr. Johnson',
//       dietPlan: 'Regular Diet Plan',
//       status: 'approved',
//       requestDate: '2024-01-14',
//       rate: 250,
//       notes: 'Standard recovery diet'
//     },
//     {
//       id: 3,
//       patientName: 'Mike Wilson',
//       patientId: 'P003',
//       doctorName: 'Dr. Brown',
//       dietPlan: 'High Protein Diet',
//       status: 'completed',
//       requestDate: '2024-01-13',
//       rate: 400,
//       notes: 'Post-surgery recovery diet'
//     }
//   ]);

//   const [formData, setFormData] = useState({
//     patientName: '',
//     patientId: '',
//     doctorName: '',
//     dietPlan: '',
//     notes: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newOrder = {
//       id: orders.length + 1,
//       ...formData,
//       status: 'pending',
//       requestDate: new Date().toISOString().split('T')[0],
//       rate: 300 // Default rate
//     };
//     setOrders([...orders, newOrder]);
//     setFormData({
//       patientName: '',
//       patientId: '',
//       doctorName: '',
//       dietPlan: '',
//       notes: ''
//     });
//     setIsAddDialogOpen(false);
//   };

//   const updateOrderStatus = (orderId, newStatus) => {
//     setOrders(orders.map(order => 
//       order.id === orderId ? { ...order, status: newStatus } : order
//     ));
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'approved':
//         return 'bg-blue-100 text-blue-800';
//       case 'completed':
//         return 'bg-green-100 text-green-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const filteredOrders = orders.filter(order => {
//     if (activeTab === 'all') return true;
//     return order.status === activeTab;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar />
      
//       <div className="flex-1 flex flex-col">
//         <TopBar />
        
//         <main className="flex-1 p-6">
//           <div className="flex justify-between items-center mb-6">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">Diet Orders</h1>
//               <p className="text-gray-600 mt-1">Manage diet orders from doctors to cafeteria</p>
//             </div>
            
//             <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
//               <DialogTrigger asChild>
//                 <Button className="bg-blue-600 hover:bg-blue-700">
//                   <Plus className="w-4 h-4 mr-2" />
//                   New Diet Order
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="max-w-2xl">
//                 <DialogHeader>
//                   <DialogTitle>Doctor Initiate Diet Order</DialogTitle>
//                 </DialogHeader>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="patientName">Patient Name</Label>
//                       <Input
//                         id="patientName"
//                         value={formData.patientName}
//                         onChange={(e) => setFormData({...formData, patientName: e.target.value})}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="patientId">Patient ID</Label>
//                       <Input
//                         id="patientId"
//                         value={formData.patientId}
//                         onChange={(e) => setFormData({...formData, patientId: e.target.value})}
//                         required
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="doctorName">Doctor Name</Label>
//                       <Input
//                         id="doctorName"
//                         value={formData.doctorName}
//                         onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="dietPlan">Diet Plan</Label>
//                       <select
//                         id="dietPlan"
//                         value={formData.dietPlan}
//                         onChange={(e) => setFormData({...formData, dietPlan: e.target.value})}
//                         className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md"
//                         required
//                       >
//                         <option value="">Select Diet Plan</option>
//                         <option value="Regular Diet Plan">Regular Diet Plan</option>
//                         <option value="Diabetic Diet Plan">Diabetic Diet Plan</option>
//                         <option value="High Protein Diet">High Protein Diet</option>
//                         <option value="Low Sodium Diet">Low Sodium Diet</option>
//                       </select>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <Label htmlFor="notes">Medical Notes</Label>
//                     <textarea
//                       id="notes"
//                       value={formData.notes}
//                       onChange={(e) => setFormData({...formData, notes: e.target.value})}
//                       className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md"
//                       placeholder="Enter medical history, allergies, special requirements..."
//                       required
//                     />
//                   </div>
                  
//                   <div className="flex justify-end space-x-2">
//                     <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
//                       Cancel
//                     </Button>
//                     <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
//                       Submit Diet Request
//                     </Button>
//                   </div>
//                 </form>
//               </DialogContent>
//             </Dialog>
//           </div>

//           {/* Tabs */}
//           <div className="flex space-x-1 mb-6">
//             {['all', 'pending', 'approved', 'completed'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   activeTab === tab
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>

//           {/* Order Status Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
//                   <p className="text-2xl font-bold text-yellow-600">
//                     {orders.filter(o => o.status === 'pending').length}
//                   </p>
//                 </div>
//                 <Clock className="w-8 h-8 text-yellow-600" />
//               </div>
//             </div>
            
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">Approved Orders</p>
//                   <p className="text-2xl font-bold text-blue-600">
//                     {orders.filter(o => o.status === 'approved').length}
//                   </p>
//                 </div>
//                 <UserCheck className="w-8 h-8 text-blue-600" />
//               </div>
//             </div>
            
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">Completed Orders</p>
//                   <p className="text-2xl font-bold text-green-600">
//                     {orders.filter(o => o.status === 'completed').length}
//                   </p>
//                 </div>
//                 <CheckCircle className="w-8 h-8 text-green-600" />
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Patient</TableHead>
//                   <TableHead>Doctor</TableHead>
//                   <TableHead>Diet Plan</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Date</TableHead>
//                   <TableHead>Rate</TableHead>
//                   <TableHead>Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filteredOrders.map((order) => (
//                   <TableRow key={order.id}>
//                     <TableCell>
//                       <div>
//                         <div className="font-medium">{order.patientName}</div>
//                         <div className="text-sm text-gray-500">{order.patientId}</div>
//                       </div>
//                     </TableCell>
//                     <TableCell>{order.doctorName}</TableCell>
//                     <TableCell>{order.dietPlan}</TableCell>
//                     <TableCell>
//                       <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
//                         {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
//                       </span>
//                     </TableCell>
//                     <TableCell>{order.requestDate}</TableCell>
//                     <TableCell>₹{order.rate}</TableCell>
//                     <TableCell>
//                       <div className="flex space-x-2">
//                         {order.status === 'pending' && (
//                           <Button 
//                             size="sm" 
//                             className="bg-green-600 hover:bg-green-700"
//                             onClick={() => updateOrderStatus(order.id, 'approved')}
//                           >
//                             Approve
//                           </Button>
//                         )}
//                         {order.status === 'approved' && (
//                           <Button 
//                             size="sm" 
//                             className="bg-blue-600 hover:bg-blue-700"
//                             onClick={() => updateOrderStatus(order.id, 'completed')}
//                           >
//                             Complete
//                           </Button>
//                         )}
//                         <Button variant="outline" size="sm">
//                           View Details
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Orders;


import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, Copy, FileSpreadsheet, FileText, Printer } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      opCardNo: '100888889999448',
      patientName: 'Sajan',
      doctorName: 'Dr. Smith',
      sex: 'Male',
      age: '38 years',
      mobile: '1324847987',
      address: 'Kochi',
      dietPlan: 'Diabetic Diet Plan',
      status: 'pending',
      requestDate: '09/06/2025',
      rate: 350,
      notes: 'Patient is diabetic, requires low sugar diet'
    },
    {
      id: 2,
      opCardNo: '25-26-25060017',
      patientName: 'Shajeer',
      doctorName: 'Dr. Johnson',
      sex: 'Male',
      age: '30 years',
      mobile: '1544877898',
      address: 'Ernakulam',
      dietPlan: 'Regular Diet Plan',
      status: 'approved',
      requestDate: '09/06/2025',
      rate: 250,
      notes: 'Standard recovery diet'
    },
    {
      id: 3,
      opCardNo: '25-26-25060018',
      patientName: 'Reena',
      doctorName: 'Dr. Brown',
      sex: 'Male',
      age: '42 years',
      mobile: '1324788780',
      address: 'Kakkanad',
      dietPlan: 'High Protein Diet',
      status: 'completed',
      requestDate: '09/06/2025',
      rate: 400,
      notes: 'Post-surgery recovery diet'
    }
  ]);

  const [formData, setFormData] = useState({
    patientName: '',
    opCardNo: '',
    doctorName: '',
    sex: 'Male',
    age: '',
    mobile: '',
    address: '',
    dietPlan: '',
    notes: ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: orders.length + 1,
      ...formData,
      status: 'pending',
      requestDate: new Date().toLocaleDateString('en-GB'),
      rate: 300 // Default rate
    };
    setOrders([...orders, newOrder]);
    setFormData({
      patientName: '',
      opCardNo: '',
      doctorName: '',
      sex: 'Male',
      age: '',
      mobile: '',
      address: '',
      dietPlan: '',
      notes: ''
    });
    setShowForm(false);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order =>
    order.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.opCardNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <TopBar />
        
        <main className="flex-1 p-6">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="border-t-4 border-[#038ba4] p-6">
              <h1 className="text-xl font-semibold text-[#038ba4] mb-1">Diet Order Management</h1>
              <p className="text-gray-600 text-sm">Manage diet orders from doctors to dietitians and cafeteria</p>
            </div>
            
            {/* Filter Section */}
            <div className="p-6 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <Label htmlFor="fromDate" className="text-sm font-medium text-gray-700">From Date</Label>
                  <Input
                    id="fromDate"
                    type="date"
                    defaultValue="2025-06-09"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="toDate" className="text-sm font-medium text-gray-700">To Date</Label>
                  <Input
                    id="toDate"
                    type="date"
                    defaultValue="2025-06-09"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="output" className="text-sm font-medium text-gray-700">Output</Label>
                  <select
                    id="output"
                    className="mt-1 w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Diet Orders</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="filter" className="text-sm font-medium text-gray-700">Status Filter</Label>
                  <select
                    id="filter"
                    className="mt-1 w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    <option>All</option>
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Go
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Copy className="w-4 h-4 mr-1" />
                Copy
              </Button>
              <Button variant="outline" size="sm">
                <FileSpreadsheet className="w-4 h-4 mr-1" />
                Excel
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-1" />
                CSV
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-1" />
                PDF
              </Button>
              <Button variant="outline" size="sm">
                <Printer className="w-4 h-4 mr-1" />
                Print
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setShowForm(!showForm)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Doctor Initiate Diet Order
              </Button>
              <div className="flex items-center gap-2">
                <Label htmlFor="search" className="text-sm font-medium">Search:</Label>
                <Input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48"
                  placeholder="Search orders..."
                />
              </div>
            </div>
          </div>

          {/* Add Diet Order Form */}
          {showForm && (
            <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
              <h2 className="text-lg font-semibold mb-4">Doctor Initiate Diet Order</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="opCardNo">OP/Card No</Label>
                    <Input
                      id="opCardNo"
                      value={formData.opCardNo}
                      onChange={(e) => setFormData({...formData, opCardNo: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="patientName">Patient Name</Label>
                    <Input
                      id="patientName"
                      value={formData.patientName}
                      onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="doctorName">Doctor Name</Label>
                    <Input
                      id="doctorName"
                      value={formData.doctorName}
                      onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="sex">Sex</Label>
                    <select
                      id="sex"
                      value={formData.sex}
                      onChange={(e) => setFormData({...formData, sex: e.target.value})}
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      placeholder="e.g., 38 years"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="mobile">Mobile</Label>
                    <Input
                      id="mobile"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="dietPlan">Diet Plan</Label>
                  <select
                    id="dietPlan"
                    value={formData.dietPlan}
                    onChange={(e) => setFormData({...formData, dietPlan: e.target.value})}
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Diet Plan</option>
                    <option value="Regular Diet Plan">Regular Diet Plan</option>
                    <option value="Diabetic Diet Plan">Diabetic Diet Plan</option>
                    <option value="High Protein Diet">High Protein Diet</option>
                    <option value="Low Sodium Diet">Low Sodium Diet</option>
                    <option value="Cardiac Diet">Cardiac Diet</option>
                    <option value="Renal Diet">Renal Diet</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="notes">Medical Notes & History</Label>
                  <textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter medical history, allergies, special dietary requirements..."
                    required
                  />
                </div>
                
                <div className="flex justify-end space-x-3">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Submit Diet Request
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Data Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  {new Date().toLocaleDateString('en-GB')}
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Print view
                </button>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sl</TableHead>
                  <TableHead>OP/Card No</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Sex</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Mobile</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Diet Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order, index) => (
                  <TableRow key={order.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium">{order.opCardNo}</TableCell>
                    <TableCell className="text-blue-600 font-medium">{order.patientName}</TableCell>
                    <TableCell>{order.sex}</TableCell>
                    <TableCell>{order.age}</TableCell>
                    <TableCell className="text-blue-600">{order.mobile}</TableCell>
                    <TableCell>{order.address}</TableCell>
                    <TableCell>{order.dietPlan}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {order.status === 'pending' && (
                          <>
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => updateOrderStatus(order.id, 'approved')}
                            >
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="text-red-600 hover:text-red-700"
                            >
                              Customize
                            </Button>
                          </>
                        )}
                        {order.status === 'approved' && (
                          <Button 
                            size="sm" 
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => updateOrderStatus(order.id, 'completed')}
                          >
                            Send to Cafeteria
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Orders;