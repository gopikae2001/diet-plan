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

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([
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

  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedType, setSelectedType] = useState('All');

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const filteredItems = foodItems.filter(item =>
  (
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  ) &&
  (selectedType === 'All' || item.type === selectedType)
);

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
    setFoodItems([...foodItems, newItem]);
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
    setShowForm(false);
  };

  const handleDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      daysAvailable: prev.daysAvailable.includes(day)
        ? prev.daysAvailable.filter(d => d !== day)
        : [...prev.daysAvailable, day]
    }));
  };


  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <TopBar />
        
        <main className="flex-1 p-6">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="border-t-4 border-[#038ba4] p-6">
              <h1 className="text-xl font-semibold text-[#038ba4] mb-1">Food Item Management</h1>
              <p className="text-gray-600 text-sm">Manage hospital food items and their nutritional information</p>
            </div>
            
            {/* Filter Section */}
            <div className="p-6 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <Label htmlFor="fromDate" className="text-sm font-medium text-gray-700">From Date</Label>
                  <Input
                    id="fromDate"
                    type="date"
                    defaultValue={today}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="toDate" className="text-sm font-medium text-gray-700">To Date</Label>
                  <Input
                    id="toDate"
                    type="date"
                    defaultValue={today}
                    className="mt-1"
                  />
                </div>
                {/* <div>
                  <Label htmlFor="output" className="text-sm font-medium text-gray-700">Output</Label>
                  <select
                    id="output"
                    className="mt-1 w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Food Items</option>
                  </select>
                </div> */}
                <div>
                  <Label htmlFor="filter" className="text-sm font-medium text-gray-700">Type Filter</Label>
                  <select
                    id="filter"
                    value={selectedType}
                    onChange={handleTypeChange}
                    className="mt-1 w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    <option>All</option>
                    <option>Vegetarian</option>
                    <option>Non-Vegetarian</option>
                    <option>High Calorie</option>
                    <option>Low Calorie</option>
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
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.print()}
              >
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
                Add Food Item
              </Button>
              <div className="flex items-center gap-2">
                <Label htmlFor="search" className="text-sm font-medium">Search:</Label>
                <Input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48"
                  placeholder="Search food name, type..."
                />
              </div>
            </div>
          </div>

          {/* Add Food Item Form */}
          {showForm && (
            <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
              <h2 className="text-lg font-semibold mb-4">Add New Food Item</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Label className="text-lg font-semibold text-green-900 mb-3 block">Days Available</Label>
                  <div className="grid grid-cols-7 gap-2">
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
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Add Food Item
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
                  <TableHead>Food Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Unit</TableHead>
                  <TableHead>Calories</TableHead>
                  <TableHead>Fat (g)</TableHead>
                  <TableHead>Carbs (g)</TableHead>
                  <TableHead>Protein (g)</TableHead>
                  <TableHead>Rate (₹)</TableHead>
                  <TableHead>Days Available</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium text-blue-600">{item.name}</TableCell>
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
                    <TableCell className="text-sm">{item.daysAvailable.join(', ')}</TableCell>
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