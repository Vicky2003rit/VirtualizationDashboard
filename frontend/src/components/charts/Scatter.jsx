import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CustomScatterPlot = ({ data }) => {
  
  const filteredData = data.filter(item => item.intensity !== "" && item.likelihood !== "");

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="intensity" name="Intensity" />
        <YAxis label={{ value: "Likelihood", angle: -90, position: "insideLeft" }}  type="number" dataKey="likelihood" name="Likelihood" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="Intensity vs Likelihood" data={filteredData} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CustomScatterPlot;
