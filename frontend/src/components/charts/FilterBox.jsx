import React, { useState } from "react";
import '../FilterBox.css';

const FilterBox = ({ onFilterChange }) => {
  const [endyear, setEndyear] = useState("");
  const [startyear, setStartyear] = useState("");
  const [region, setRegion] = useState("");

  const startyears = ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2025", "2030", "2035", "2040", "2050"];
  const regions = ['Northern America', 'Central America', 'World', 'Western Africa', 'Western Asia', 'Eastern Europe', 'Central Africa', 'Northern Africa', 'Southern Africa', 'Southern Asia', 'Central Asia', 'Eastern Asia', 'South America', 'South-Eastern Asia', 'Eastern Africa', 'Europe', 'Western Europe', 'Northern Europe', 'Southern Europe', 'Oceania', 'Africa', 'Asia'];
  const endyears = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];

  const handleFilterApply = () => {
    onFilterChange({ endyear, startyear, region });
  };

  return (
    <div className="filter-container">
      <div className="filter-box">
        
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">All Region</option>
          {regions.map((reg) => (
            <option key={reg} value={reg}>
              {reg}
            </option>
          ))}
        </select>

        
        <select value={endyear} onChange={(e) => setEndyear(e.target.value)}>
          <option value="">All End Year</option>
          {endyears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        
        <select value={startyear} onChange={(e) => setStartyear(e.target.value)}>
          <option value="">All Start Year</option>
          {startyears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button className="apply-button" onClick={handleFilterApply}>Apply Filters</button>
      </div>
    </div>
  );
};

export default FilterBox;
