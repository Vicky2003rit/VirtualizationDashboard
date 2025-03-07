import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const CustomPieChart = ({ myData }) => {
  
  if (!Array.isArray(myData) || myData.length === 0) {
    return <div>No data available</div>; // Handle the case where myData is not an array or is empty
  }

  
  const topicCounts = myData.reduce((acc, item) => {
    acc[item.topic] = (acc[item.topic] || 0) + 1; // Increment count for each topic
    return acc;
  }, {});

  
  const chartData = Object.keys(topicCounts).map((key) => ({
    name: key,
    value: topicCounts[key],
  }));

  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6699'];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="value" 
        nameKey="name" 
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart;
