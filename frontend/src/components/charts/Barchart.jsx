import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const StackedBarChart = ({ myData }) => {
  
  if (!Array.isArray(myData)) {
    return <div>No data available</div>; 
  }


  const groupedData = myData.reduce((acc, item) => {
    const country = item.country;  
    const pestle = item.pestle;

    if (!country || !pestle) return acc; 

    if (!acc[country]) {
      acc[country] = { country }; 
    }

    acc[country][pestle] = (acc[country][pestle] || 0) + 1; 
    return acc;
  }, {});

  
  const chartData = Object.values(groupedData);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="country" 
          tick={{ fontSize: 12 }} 
          angle={-45}  
          textAnchor="end" 
        />
        <YAxis  label={{ value: 'Number of Occurrences', angle: -90, position: 'insideLeft', fontSize: 14 }} />
        <Tooltip />
        <Legend />

        
        <Bar dataKey="Economic" stackId="a" fill="#8884d8" barSize={30} />
        <Bar dataKey="Social" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Political" stackId="a" fill="#ffc658" />
        <Bar dataKey="Environmental" stackId="a" fill="#00C49F" />
        <Bar dataKey="Technological" stackId="a" fill="#FFBB28" />
        <Bar dataKey="Industries" stackId="a" fill="#FF8042" />
        <Bar dataKey="Lifestyles" stackId="a" fill="#9cff33" />
        <Bar dataKey="Organization" stackId="a" fill="#33e9ff" />
        <Bar dataKey="Healthcare" stackId="a" fill="#333cff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
