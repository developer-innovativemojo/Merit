import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Calendar, ChevronDown, ArrowUpRight, ArrowDownRight, Check, AlertCircle, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock data for analytics
const winRateData = [
  { name: 'Q1', rate: 35 },
  { name: 'Q2', rate: 42 },
  { name: 'Q3', rate: 58 },
  { name: 'Q4', rate: 65 },
];

const pipelineData = [
  { name: 'DOD', qualification: 4, capture: 2, proposal: 3, won: 5 },
  { name: 'DHS', qualification: 3, capture: 1, proposal: 2, won: 2 },
  { name: 'VA', qualification: 5, capture: 3, proposal: 1, won: 4 },
  { name: 'NASA', qualification: 2, capture: 2, proposal: 2, won: 1 },
  { name: 'HHS', qualification: 3, capture: 2, proposal: 1, won: 2 },
];

const pieData = [
  { name: 'Cybersecurity', value: 35 },
  { name: 'Cloud Services', value: 25 },
  { name: 'Data Analytics', value: 20 },
  { name: 'Health IT', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#50B94B', '#30434D', '#4EA8DE', '#9E77ED', '#F79009'];

const partnersData = [
  { name: 'TechSolutions Inc.', engagements: 12, effectiveness: 4.8 },
  { name: 'SecurityWare Systems', engagements: 9, effectiveness: 4.5 },
  { name: 'DataVision Partners', engagements: 7, effectiveness: 4.3 },
  { name: 'CloudSphere Technologies', engagements: 5, effectiveness: 4.6 },
  { name: 'AgileDefend Solutions', engagements: 4, effectiveness: 4.7 },
];

const deadlinesData = [
  { name: 'DOD Cybersecurity', deadline: '2023-09-15', daysLeft: 12, status: 'on-track' },
  { name: 'VA Healthcare Proposal', deadline: '2023-08-30', daysLeft: -2, status: 'overdue' },
  { name: 'NASA Data Management', deadline: '2023-10-05', daysLeft: 32, status: 'on-track' },
  { name: 'DHS Border Technology', deadline: '2023-09-10', daysLeft: 7, status: 'at-risk' },
];

const AnalyticsDashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-secondary">Analytics Dashboard</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            Last 12 Months
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Win Rate</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold">65%</h3>
                  <span className="text-sm text-green-600 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-0.5" />
                    7%
                  </span>
                </div>
              </div>
              <div className="bg-green-100 p-2 rounded-md">
                <Check className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Target: 60%</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Pipeline Value</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold">$28.6M</h3>
                  <span className="text-sm text-green-600 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-0.5" />
                    12%
                  </span>
                </div>
              </div>
              <div className="bg-blue-100 p-2 rounded-md">
                <ArrowUpRight className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Target: $25M</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Active Partners</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold">18</h3>
                  <span className="text-sm text-red-600 flex items-center">
                    <ArrowDownRight className="h-3 w-3 mr-0.5" />
                    2
                  </span>
                </div>
              </div>
              <div className="bg-orange-100 p-2 rounded-md">
                <Users className="h-5 w-5 text-orange-600" />
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Target: 25</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Pending Deadlines</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold">4</h3>
                  <span className="text-sm text-yellow-600 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-0.5" />
                    1 at risk
                  </span>
                </div>
              </div>
              <div className="bg-yellow-100 p-2 rounded-md">
                <Calendar className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Next: In 7 days</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Win Rate Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={winRateData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => [`${value}%`, "Win Rate"]} />
                  <Legend />
                  <Bar dataKey="rate" fill="#50B94B" name="Win Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Opportunity Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Pipeline by Agency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={pipelineData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="qualification" stackId="a" fill="#8884d8" name="Qualification" />
                  <Bar dataKey="capture" stackId="a" fill="#82ca9d" name="Capture" />
                  <Bar dataKey="proposal" stackId="a" fill="#ffc658" name="Proposal" />
                  <Bar dataKey="won" stackId="a" fill="#50B94B" name="Won" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deadlinesData.map((deadline, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-secondary">{deadline.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-3 w-3 text-gray-500" />
                      <span className="text-sm text-gray-500">{deadline.deadline}</span>
                    </div>
                  </div>
                  
                  <div>
                    {deadline.status === 'on-track' && (
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        {deadline.daysLeft} days left
                      </Badge>
                    )}
                    {deadline.status === 'at-risk' && (
                      <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
                        {deadline.daysLeft} days left
                      </Badge>
                    )}
                    {deadline.status === 'overdue' && (
                      <Badge className="bg-red-100 text-red-700 border-red-200">
                        {Math.abs(deadline.daysLeft)} days overdue
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
