
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Plus, Edit, Trash2 } from 'lucide-react';
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

const DietPlans = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [dietPlans, setDietPlans] = useState([
    {
      id: 1,
      name: 'Diabetic Diet Plan',
      type: 'Therapeutic',
      rate: 350,
      breakfast: { morning: 'Oats - 100g', afternoon: 'Apple - 1 piece' },
      lunch: 'Brown Rice - 150g, Dal - 100g, Vegetables - 150g',
      dinner: 'Roti - 2 pieces, Grilled Chicken - 100g, Salad - 100g',
      totalRate: 350
    },
    {
      id: 2,
      name: 'Regular Diet Plan',
      type: 'Regular',
      rate: 250,
      breakfast: { morning: 'Bread - 2 slices, Butter - 10g', afternoon: 'Tea - 1 cup' },
      lunch: 'Rice - 200g, Curry - 150g, Vegetables - 100g',
      dinner: 'Roti - 3 pieces, Dal - 100g, Curd - 100g',
      totalRate: 250
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    type: 'Regular',
    rate: '',
    breakfastMorning: '',
    breakfastAfternoon: '',
    lunch: '',
    dinner: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlan = {
      id: dietPlans.length + 1,
      name: formData.name,
      type: formData.type,
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
      name: '',
      type: 'Regular',
      rate: '',
      breakfastMorning: '',
      breakfastAfternoon: '',
      lunch: '',
      dinner: ''
    });
    setIsAddDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <TopBar />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Diet Plans</h1>
              <p className="text-gray-600 mt-1">Manage diet packages and meal plans</p>
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Diet Plan
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Add New Diet Plan</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Diet Package Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Diet Type</Label>
                      <select
                        id="type"
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="Regular">Regular</option>
                        <option value="Specialized">Specialized</option>
                        <option value="Therapeutic">Therapeutic</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="rate">Rate (₹)</Label>
                    <Input
                      id="rate"
                      type="number"
                      value={formData.rate}
                      onChange={(e) => setFormData({...formData, rate: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Breakfast</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="breakfastMorning">Morning Items & Quantity</Label>
                        <Input
                          id="breakfastMorning"
                          value={formData.breakfastMorning}
                          onChange={(e) => setFormData({...formData, breakfastMorning: e.target.value})}
                          placeholder="e.g., Oats - 100g"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="breakfastAfternoon">Afternoon Items & Quantity</Label>
                        <Input
                          id="breakfastAfternoon"
                          value={formData.breakfastAfternoon}
                          onChange={(e) => setFormData({...formData, breakfastAfternoon: e.target.value})}
                          placeholder="e.g., Tea - 1 cup"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="lunch">Lunch Items & Quantity</Label>
                    <Input
                      id="lunch"
                      value={formData.lunch}
                      onChange={(e) => setFormData({...formData, lunch: e.target.value})}
                      placeholder="e.g., Rice - 200g, Dal - 100g"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="dinner">Dinner Items & Quantity</Label>
                    <Input
                      id="dinner"
                      value={formData.dinner}
                      onChange={(e) => setFormData({...formData, dinner: e.target.value})}
                      placeholder="e.g., Roti - 2 pieces, Vegetables - 150g"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Add Diet Plan
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dietPlans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs mt-1 ${
                      plan.type === 'Regular' ? 'bg-blue-100 text-blue-800' :
                      plan.type === 'Specialized' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {plan.type}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-700">Breakfast</h4>
                    <p className="text-sm text-gray-600">Morning: {plan.breakfast.morning}</p>
                    <p className="text-sm text-gray-600">Afternoon: {plan.breakfast.afternoon}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Lunch</h4>
                    <p className="text-sm text-gray-600">{plan.lunch}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Dinner</h4>
                    <p className="text-sm text-gray-600">{plan.dinner}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Total Rate:</span>
                    <span className="text-lg font-bold text-blue-600">₹{plan.totalRate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DietPlans;
