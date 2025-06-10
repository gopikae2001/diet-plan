
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

const FoodItems = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const savedItems = JSON.parse(localStorage.getItem('foodItems') || '[]');
  const [foodItems, setFoodItems] = useState(savedItems.length > 0 ? savedItems : [
    {
      id: 1,
      name: 'Brown Rice',
      type: 'Vegetarian',
      unit: 'grams',
      calories: 112,
      fat: 0.9,
      carbs: 23,
      protein: 2.6,
      rate: 15,
      daysAvailable: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    {
      id: 2,
      name: 'Grilled Chicken',
      type: 'Non-Vegetarian',
      unit: 'grams',
      calories: 165,
      fat: 3.6,
      carbs: 0,
      protein: 31,
      rate: 45,
      daysAvailable: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    type: 'Vegetarian',
    unit: 'grams',
    calories: '',
    fat: '',
    carbs: '',
    protein: '',
    rate: '',
    daysAvailable: []
  });

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: foodItems.length + 1,
      ...formData,
      calories: Number(formData.calories),
      fat: Number(formData.fat),
      carbs: Number(formData.carbs),
      protein: Number(formData.protein),
      rate: Number(formData.rate)
    };
    const updatedItems = [...foodItems, newItem];
    setFoodItems(updatedItems);
    localStorage.setItem('foodItems', JSON.stringify(updatedItems));
    setFormData({
      name: '',
      type: 'Vegetarian',
      unit: 'grams',
      calories: '',
      fat: '',
      carbs: '',
      protein: '',
      rate: '',
      daysAvailable: []
    });
    setIsAddDialogOpen(false);
  };

  const handleDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      daysAvailable: prev.daysAvailable.includes(day)
        ? prev.daysAvailable.filter(d => d !== day)
        : [...prev.daysAvailable, day]
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'Vegetarian',
      unit: 'grams',
      calories: '',
      fat: '',
      carbs: '',
      protein: '',
      rate: '',
      daysAvailable: []
    });
  };
  const handleDelete = (id) => {
    const updatedItems = foodItems.filter(item => item.id !== id);
    setFoodItems(updatedItems);
    localStorage.setItem('foodItems', JSON.stringify(updatedItems));
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <TopBar />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Food Items</h1>
              <p className="text-gray-600 mt-1">Manage hospital food items and their nutritional information</p>
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Food Item
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Food Item</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Food Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Food Type</Label>
                      <select
                        id="type"
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="High Calorie">High Calorie</option>
                        <option value="Low Calorie">Low Calorie</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="unit">Unit</Label>
                      <Input
                        id="unit"
                        value={formData.unit}
                        onChange={(e) => setFormData({...formData, unit: e.target.value})}
                        placeholder="e.g., grams, pieces, cups"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="rate">Rate (cost per unit)</Label>
                      <Input
                        id="rate"
                        type="number"
                        step="0.01"
                        value={formData.rate}
                        onChange={(e) => setFormData({...formData, rate: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-blue-50">
                    <h3 className="text-lg font-semibold mb-4 text-blue-900">Nutritional Information</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <Label htmlFor="calories">Calories</Label>
                        <Input
                          id="calories"
                          type="number"
                          step="0.1"
                          value={formData.calories}
                          onChange={(e) => setFormData({...formData, calories: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="fat">Fat (grams)</Label>
                        <Input
                          id="fat"
                          type="number"
                          step="0.1"
                          value={formData.fat}
                          onChange={(e) => setFormData({...formData, fat: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="carbs">Carbohydrates (grams)</Label>
                        <Input
                          id="carbs"
                          type="number"
                          step="0.1"
                          value={formData.carbs}
                          onChange={(e) => setFormData({...formData, carbs: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="protein">Protein (grams)</Label>
                        <Input
                          id="protein"
                          type="number"
                          step="0.1"
                          value={formData.protein}
                          onChange={(e) => setFormData({...formData, protein: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-green-50">
                    <Label className="text-lg font-semibold text-green-900">Days Available</Label>
                    <div className="grid grid-cols-7 gap-2 mt-3">
                      {daysOfWeek.map((day) => (
                        <label key={day} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.daysAvailable.includes(day)}
                            onChange={() => handleDayToggle(day)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm font-medium text-green-800">{day}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Reset
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Add Food Item
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Food Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead>Calories</TableHead>
                  <TableHead>Fat (g)</TableHead>
                  <TableHead>Carbs (g)</TableHead>
                  <TableHead>Protein (g)</TableHead>
                  <TableHead>Rate (₹)</TableHead>
                  <TableHead>Days Available</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {foodItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.type === 'Vegetarian' ? 'bg-green-100 text-green-800' :
                        item.type === 'Non-Vegetarian' ? 'bg-red-100 text-red-800' :
                        item.type === 'High Calorie' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.type}
                      </span>
                    </TableCell>
                    <TableCell>{item.unit}</TableCell>
                    <TableCell>{item.calories}</TableCell>
                    <TableCell>{item.fat}</TableCell>
                    <TableCell>{item.carbs}</TableCell>
                    <TableCell>{item.protein}</TableCell>
                    <TableCell>₹{item.rate}</TableCell>
                    <TableCell>{item.daysAvailable.join(', ')}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this food item?')) {
                              handleDelete(item.id);
                            }
                          }}
                          title="Delete food item"
                        >
                          <Trash2 className="w-4 h-4" />
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

export default FoodItems;
