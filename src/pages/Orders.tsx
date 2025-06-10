
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, CheckCircle, Clock, UserCheck } from 'lucide-react';
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
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pending');
  const [orders, setOrders] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      patientId: 'P001',
      doctorName: 'Dr. Smith',
      dietPlan: 'Diabetic Diet Plan',
      status: 'pending',
      requestDate: '2024-01-15',
      rate: 350,
      notes: 'Patient is diabetic, requires low sugar diet'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      patientId: 'P002',
      doctorName: 'Dr. Johnson',
      dietPlan: 'Regular Diet Plan',
      status: 'approved',
      requestDate: '2024-01-14',
      rate: 250,
      notes: 'Standard recovery diet'
    },
    {
      id: 3,
      patientName: 'Mike Wilson',
      patientId: 'P003',
      doctorName: 'Dr. Brown',
      dietPlan: 'High Protein Diet',
      status: 'completed',
      requestDate: '2024-01-13',
      rate: 400,
      notes: 'Post-surgery recovery diet'
    }
  ]);

  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    doctorName: '',
    dietPlan: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: orders.length + 1,
      ...formData,
      status: 'pending',
      requestDate: new Date().toISOString().split('T')[0],
      rate: 300 // Default rate
    };
    setOrders([...orders, newOrder]);
    setFormData({
      patientName: '',
      patientId: '',
      doctorName: '',
      dietPlan: '',
      notes: ''
    });
    setIsAddDialogOpen(false);
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

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    return order.status === activeTab;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <TopBar />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Diet Orders</h1>
              <p className="text-gray-600 mt-1">Manage diet orders from doctors to cafeteria</p>
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Diet Order
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Doctor Initiate Diet Order</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="patientName">Patient Name</Label>
                      <Input
                        id="patientName"
                        value={formData.patientName}
                        onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="patientId">Patient ID</Label>
                      <Input
                        id="patientId"
                        value={formData.patientId}
                        onChange={(e) => setFormData({...formData, patientId: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
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
                      <Label htmlFor="dietPlan">Diet Plan</Label>
                      <select
                        id="dietPlan"
                        value={formData.dietPlan}
                        onChange={(e) => setFormData({...formData, dietPlan: e.target.value})}
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md"
                        required
                      >
                        <option value="">Select Diet Plan</option>
                        <option value="Regular Diet Plan">Regular Diet Plan</option>
                        <option value="Diabetic Diet Plan">Diabetic Diet Plan</option>
                        <option value="High Protein Diet">High Protein Diet</option>
                        <option value="Low Sodium Diet">Low Sodium Diet</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="notes">Medical Notes</Label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter medical history, allergies, special requirements..."
                      required
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Submit Diet Request
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-6">
            {['all', 'pending', 'approved', 'completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Order Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {orders.filter(o => o.status === 'pending').length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Approved Orders</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {orders.filter(o => o.status === 'approved').length}
                  </p>
                </div>
                <UserCheck className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed Orders</p>
                  <p className="text-2xl font-bold text-green-600">
                    {orders.filter(o => o.status === 'completed').length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Diet Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{order.patientName}</div>
                        <div className="text-sm text-gray-500">{order.patientId}</div>
                      </div>
                    </TableCell>
                    <TableCell>{order.doctorName}</TableCell>
                    <TableCell>{order.dietPlan}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell>{order.requestDate}</TableCell>
                    <TableCell>₹{order.rate}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {order.status === 'pending' && (
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => updateOrderStatus(order.id, 'approved')}
                          >
                            Approve
                          </Button>
                        )}
                        {order.status === 'approved' && (
                          <Button 
                            size="sm" 
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => updateOrderStatus(order.id, 'completed')}
                          >
                            Complete
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
