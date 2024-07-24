import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const generateData = () => [...Array(12)].map((_, i) => ({
  month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
  revenue: Math.floor(Math.random() * 5000) + 1000
}));

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateData());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Card className="m-4">
          <CardHeader>
            <h2 className="text-2xl font-bold">Monthly Revenue</h2>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Bar dataKey="revenue" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
      <footer className="bg-green-500 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;