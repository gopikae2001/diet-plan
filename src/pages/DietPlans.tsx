
// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import TopBar from '../components/TopBar';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Label } from '../components/ui/label';
// import { Plus, Edit, Trash2 } from 'lucide-react';
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

// const DietPlans = () => {
//   const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
//   const [dietPlans, setDietPlans] = useState([
//     {
//       id: 1,
//       name: 'Diabetic Diet Plan',
//       type: 'Therapeutic',
//       rate: 350,
//       breakfast: { morning: 'Oats - 100g', afternoon: 'Apple - 1 piece' },
//       lunch: 'Brown Rice - 150g, Dal - 100g, Vegetables - 150g',
//       dinner: 'Roti - 2 pieces, Grilled Chicken - 100g, Salad - 100g',
//       totalRate: 350
//     },
//     {
//       id: 2,
//       name: 'Regular Diet Plan',
//       type: 'Regular',
//       rate: 250,
//       breakfast: { morning: 'Bread - 2 slices, Butter - 10g', afternoon: 'Tea - 1 cup' },
//       lunch: 'Rice - 200g, Curry - 150g, Vegetables - 100g',
//       dinner: 'Roti - 3 pieces, Dal - 100g, Curd - 100g',
//       totalRate: 250
//     }
//   ]);

//   const [formData, setFormData] = useState({
//     name: '',
//     type: 'Regular',
//     rate: '',
//     breakfastMorning: '',
//     breakfastAfternoon: '',
//     lunch: '',
//     dinner: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newPlan = {
//       id: dietPlans.length + 1,
//       name: formData.name,
//       type: formData.type,
//       rate: Number(formData.rate),
//       breakfast: {
//         morning: formData.breakfastMorning,
//         afternoon: formData.breakfastAfternoon
//       },
//       lunch: formData.lunch,
//       dinner: formData.dinner,
//       totalRate: Number(formData.rate)
//     };
//     setDietPlans([...dietPlans, newPlan]);
//     setFormData({
//       name: '',
//       type: 'Regular',
//       rate: '',
//       breakfastMorning: '',
//       breakfastAfternoon: '',
//       lunch: '',
//       dinner: ''
//     });
//     setIsAddDialogOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar />
      
//       <div className="flex-1 flex flex-col">
//         <TopBar />
        
//         <main className="flex-1 p-6">
//           <div className="flex justify-between items-center mb-6">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">Diet Plans</h1>
//               <p className="text-gray-600 mt-1">Manage diet packages and meal plans</p>
//             </div>
            
//             <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
//               <DialogTrigger asChild>
//                 <Button className="bg-blue-600 hover:bg-blue-700">
//                   <Plus className="w-4 h-4 mr-2" />
//                   Add Diet Plan
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="max-w-3xl">
//                 <DialogHeader>
//                   <DialogTitle>Add New Diet Plan</DialogTitle>
//                 </DialogHeader>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="name">Diet Package Name</Label>
//                       <Input
//                         id="name"
//                         value={formData.name}
//                         onChange={(e) => setFormData({...formData, name: e.target.value})}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="type">Diet Type</Label>
//                       <select
//                         id="type"
//                         value={formData.type}
//                         onChange={(e) => setFormData({...formData, type: e.target.value})}
//                         className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md"
//                       >
//                         <option value="Regular">Regular</option>
//                         <option value="Specialized">Specialized</option>
//                         <option value="Therapeutic">Therapeutic</option>
//                       </select>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <Label htmlFor="rate">Rate (₹)</Label>
//                     <Input
//                       id="rate"
//                       type="number"
//                       value={formData.rate}
//                       onChange={(e) => setFormData({...formData, rate: e.target.value})}
//                       required
//                     />
//                   </div>
                  
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold">Breakfast</h3>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="breakfastMorning">Morning Items & Quantity</Label>
//                         <Input
//                           id="breakfastMorning"
//                           value={formData.breakfastMorning}
//                           onChange={(e) => setFormData({...formData, breakfastMorning: e.target.value})}
//                           placeholder="e.g., Oats - 100g"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="breakfastAfternoon">Afternoon Items & Quantity</Label>
//                         <Input
//                           id="breakfastAfternoon"
//                           value={formData.breakfastAfternoon}
//                           onChange={(e) => setFormData({...formData, breakfastAfternoon: e.target.value})}
//                           placeholder="e.g., Tea - 1 cup"
//                           required
//                         />
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <Label htmlFor="lunch">Lunch Items & Quantity</Label>
//                     <Input
//                       id="lunch"
//                       value={formData.lunch}
//                       onChange={(e) => setFormData({...formData, lunch: e.target.value})}
//                       placeholder="e.g., Rice - 200g, Dal - 100g"
//                       required
//                     />
//                   </div>
                  
//                   <div>
//                     <Label htmlFor="dinner">Dinner Items & Quantity</Label>
//                     <Input
//                       id="dinner"
//                       value={formData.dinner}
//                       onChange={(e) => setFormData({...formData, dinner: e.target.value})}
//                       placeholder="e.g., Roti - 2 pieces, Vegetables - 150g"
//                       required
//                     />
//                   </div>
                  
//                   <div className="flex justify-end space-x-2">
//                     <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
//                       Cancel
//                     </Button>
//                     <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
//                       Add Diet Plan
//                     </Button>
//                   </div>
//                 </form>
//               </DialogContent>
//             </Dialog>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {dietPlans.map((plan) => (
//               <div key={plan.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
//                     <span className={`inline-block px-2 py-1 rounded-full text-xs mt-1 ${
//                       plan.type === 'Regular' ? 'bg-blue-100 text-blue-800' :
//                       plan.type === 'Specialized' ? 'bg-purple-100 text-purple-800' :
//                       'bg-green-100 text-green-800'
//                     }`}>
//                       {plan.type}
//                     </span>
//                   </div>
//                   <div className="flex space-x-2">
//                     <Button variant="outline" size="sm">
//                       <Edit className="w-4 h-4" />
//                     </Button>
//                     <Button variant="outline" size="sm">
//                       <Trash2 className="w-4 h-4" />
//                     </Button>
//                   </div>
//                 </div>
                
//                 <div className="space-y-3">
//                   <div>
//                     <h4 className="font-medium text-gray-700">Breakfast</h4>
//                     <p className="text-sm text-gray-600">Morning: {plan.breakfast.morning}</p>
//                     <p className="text-sm text-gray-600">Afternoon: {plan.breakfast.afternoon}</p>
//                   </div>
                  
//                   <div>
//                     <h4 className="font-medium text-gray-700">Lunch</h4>
//                     <p className="text-sm text-gray-600">{plan.lunch}</p>
//                   </div>
                  
//                   <div>
//                     <h4 className="font-medium text-gray-700">Dinner</h4>
//                     <p className="text-sm text-gray-600">{plan.dinner}</p>
//                   </div>
//                 </div>
                
//                 <div className="mt-4 pt-4 border-t border-gray-200">
//                   <div className="flex justify-between items-center">
//                     <span className="font-medium text-gray-700">Total Rate:</span>
//                     <span className="text-lg font-bold text-blue-600">₹{plan.totalRate}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DietPlans;


import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, Copy, FileSpreadsheet, FileText, Printer } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

const DietPlans = () => {
  const [dietPlans, setDietPlans] = useState([
    {
      id: 1,
      packageName: 'Diabetic Diet Package',
      dietType: 'Therapeutic',
      rate: 350,
      breakfast: {
        morning: 'Oats - 100g, Milk - 200ml',
        afternoon: 'Apple - 1 piece, Green Tea - 1 cup'
      },
      lunch: 'Brown Rice - 150g, Dal - 100g, Vegetables - 150g, Salad - 50g',
      dinner: 'Roti - 2 pieces, Grilled Chicken - 100g, Curry - 100g',
      totalRate: 350
    },
    {
      id: 2,
      packageName: 'Regular Diet Package',
      dietType: 'Regular',
      rate: 250,
      breakfast: {
        morning: 'Bread - 2 slices, Butter - 10g, Tea - 1 cup',
        afternoon: 'Biscuits - 2 pieces, Milk - 150ml'
      },
      lunch: 'Rice - 200g, Curry - 150g, Vegetables - 100g, Dal - 100g',
      dinner: 'Roti - 3 pieces, Dal - 100g, Curd - 100g, Pickle - 10g',
      totalRate: 250
    }
  ]);

  const [formData, setFormData] = useState({
    packageName: '',
    dietType: 'Regular',
    rate: '',
    breakfastMorning: '',
    breakfastAfternoon: '',
    lunch: '',
    dinner: ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPlan = {
      id: dietPlans.length + 1,
      packageName: formData.packageName,
      dietType: formData.dietType,
      rate: Number(formData.rate),
      breakfast: {
        morning: formData.breakfastMorning,
        afternoon: formData.breakfastAfternoon
      },
      lunch: formData.lunch,
      dinner: formData.dinner,
      totalRate: Number(formData.rate)
    };
    setDietPlans([...dietPlans, newPlan]);
    setFormData({
      packageName: '',
      dietType: 'Regular',
      rate: '',
      breakfastMorning: '',
      breakfastAfternoon: '',
      lunch: '',
      dinner: ''
    });
    setShowForm(false);
  };

  const filteredPlans = dietPlans.filter(plan =>
    plan.packageName.toLowerCase().includes(searchTerm.toLowerCase())
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
              <h1 className="text-xl font-semibold text-[#038ba4] mb-1">Diet Package Management</h1>
              <p className="text-gray-600 text-sm">Date Wise Diet Package Management Report Details</p>
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
                    <option>Diet Package</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="filter" className="text-sm font-medium text-gray-700">Corporate Filter</Label>
                  <select
                    id="filter"
                    className="mt-1 w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    <option>All</option>
                    <option>Regular</option>
                    <option>Specialized</option>
                    <option>Therapeutic</option>
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
                Add Diet Package
              </Button>
              <div className="flex items-center gap-2">
                <Label htmlFor="search" className="text-sm font-medium">Search:</Label>
                <Input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48"
                  placeholder="Search diet packages..."
                />
              </div>
            </div>
          </div>

          {/* Add Diet Package Form */}
          {showForm && (
            <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
              <h2 className="text-lg font-semibold mb-4">Add New Diet Package</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="packageName">Diet Package Name</Label>
                    <Input
                      id="packageName"
                      value={formData.packageName}
                      onChange={(e) => setFormData({...formData, packageName: e.target.value})}
                      placeholder="Enter package name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="dietType">Diet Type</Label>
                    <select
                      id="dietType"
                      value={formData.dietType}
                      onChange={(e) => setFormData({...formData, dietType: e.target.value})}
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Regular">Regular</option>
                      <option value="Specialized">Specialized</option>
                      <option value="Therapeutic">Therapeutic</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="rate">Rate (₹)</Label>
                    <Input
                      id="rate"
                      type="number"
                      value={formData.rate}
                      onChange={(e) => setFormData({...formData, rate: e.target.value})}
                      placeholder="Package cost"
                      required
                    />
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 bg-blue-50">
                  <h3 className="text-lg font-semibold mb-4 text-blue-900">Breakfast</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="breakfastMorning">Morning Items & Quantity</Label>
                      <Input
                        id="breakfastMorning"
                        value={formData.breakfastMorning}
                        onChange={(e) => setFormData({...formData, breakfastMorning: e.target.value})}
                        placeholder="e.g., Oats - 100g, Milk - 200ml"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="breakfastAfternoon">Afternoon Items & Quantity</Label>
                      <Input
                        id="breakfastAfternoon"
                        value={formData.breakfastAfternoon}
                        onChange={(e) => setFormData({...formData, breakfastAfternoon: e.target.value})}
                        placeholder="e.g., Apple - 1 piece, Tea - 1 cup"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="lunch">Lunch Items & Quantity</Label>
                    <Input
                      id="lunch"
                      value={formData.lunch}
                      onChange={(e) => setFormData({...formData, lunch: e.target.value})}
                      placeholder="e.g., Rice - 200g, Dal - 100g, Vegetables - 150g"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="dinner">Dinner Items & Quantity</Label>
                    <Input
                      id="dinner"
                      value={formData.dinner}
                      onChange={(e) => setFormData({...formData, dinner: e.target.value})}
                      placeholder="e.g., Roti - 2 pieces, Curry - 100g"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Add Diet Package
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Data Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sl</TableHead>
                  <TableHead>Package Name</TableHead>
                  <TableHead>Diet Type</TableHead>
                  <TableHead>Breakfast (Morning)</TableHead>
                  <TableHead>Breakfast (Afternoon)</TableHead>
                  <TableHead>Lunch</TableHead>
                  <TableHead>Dinner</TableHead>
                  <TableHead>Total Rate (₹)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPlans.map((plan, index) => (
                  <TableRow key={plan.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium text-blue-600">{plan.packageName}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        plan.dietType === 'Regular' ? 'bg-blue-100 text-blue-800' :
                        plan.dietType === 'Specialized' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {plan.dietType}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm">{plan.breakfast.morning}</TableCell>
                    <TableCell className="text-sm">{plan.breakfast.afternoon}</TableCell>
                    <TableCell className="text-sm">{plan.lunch}</TableCell>
                    <TableCell className="text-sm">{plan.dinner}</TableCell>
                    <TableCell className="font-semibold">₹{plan.totalRate}</TableCell>
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

export default DietPlans;