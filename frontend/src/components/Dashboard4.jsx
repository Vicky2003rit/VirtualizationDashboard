import React, { useState, useEffect } from "react";
import MyChartBox from "./charts/ChartBox"; 
import FilterBox from "./charts/FilterBox"; 
import AxiosInstance from "./Axios";
import CustomPieChart from "./charts/PieChart";
import CustomScatterPlot from "./charts/Scatter";
import CustomDonutChart from "./charts/Donut";
import StackedBarChart from "./charts/Barchart";
import "../App.css";
import LineChartComponent from './charts/CusTomLinechart';

const Dashboard4 = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [dashboar1Data, setdashboar1Data] = useState([]);

  // Fetch data from API
  const getData = () => {
    AxiosInstance.get("dashboar4Data/")
      .then((res) => {
        setdashboar1Data(res.data);
        setFilteredData(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

 
  const handleFilterChange = (filters) => {
    const { endyear, startyear, region } = filters;
    let filtered = dashboar1Data;

    
    if (endyear) {
      filtered = filtered.filter((item) => item.end_year === endyear);
    }

    if (startyear) {
      filtered = filtered.filter((item) => item.start_year === startyear);
    }

    if (region) {
      filtered = filtered.filter((item) => item.region === region);
    }

    setFilteredData(filtered); // Update filtered data
  };

  return (
    <div>
      
      <FilterBox onFilterChange={handleFilterChange} />

     
      {filteredData.length > 0 ? (

        <div  className="chart-container">
        
        <
          MyChartBox
          title1={"Topic wise Datas"}
          chart1={<CustomPieChart myData={filteredData} />}
          title2={"Relationship between Intensity and Likelihood"}
          chart2={<CustomScatterPlot data={filteredData} />}
          title3={"Distributed among different countries"}
          chart3={<CustomDonutChart myData={filteredData} />}
          title4={"Country Wise Datas"}
          chart4={<StackedBarChart myData={filteredData} />}
          title5={"Impact On each year"}
          chart5={<LineChartComponent myData={filteredData} />}
        />
        </div>
      ) : (
        <div>No data to display</div>
      )}
    </div>
  );
};

export default Dashboard4;
