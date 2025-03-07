import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const CustomDonutChart = ({ myData }) => {
 
  if (!Array.isArray(myData)) {
    return <div>No data available</div>; 
  }

  
  const countryRelevance = myData.reduce((acc, item) => {
    const country = item.country;
    const relevance = item.relevance;

    if (country) {
      acc[country] = (acc[country] || 0) + relevance; 
    }
    return acc;
  }, {});

  
  const chartData = Object.keys(countryRelevance).map((country) => ({
    name: country,
    value: countryRelevance[country],
  }));

 
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6699', '#82ca9d'];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        innerRadius={40}
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

export default CustomDonutChart;
