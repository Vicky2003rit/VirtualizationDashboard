import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const LineChartComponent= ({ myData }) => {
  
  const groupedData = myData.reduce((acc, item) => {
    const region = item.region;
    const relevance = parseFloat(item.relevance) || 0;

    if (!region) return acc;
    if (!acc[region]) {
      acc[region] = { region, total_relevance: 0, count: 0 };
    }

    acc[region].total_relevance += relevance;
    acc[region].count += 1;

    return acc;
  }, {});

  const chartData = Object.values(groupedData).map(item => ({
    region: item.region,
    relevance: item.total_relevance / item.count, 
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData} margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="region" />
        <YAxis label={{ value: "Average Relevance", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="relevance" stroke="#82ca9d" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
