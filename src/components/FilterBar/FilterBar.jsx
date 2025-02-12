// import React from 'react';

// const FilterBar = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out">
//       <select className="px-4 py-2 border rounded-lg text-gray-600 bg-white w-full md:w-auto">
//         <option>All branches</option>
//         <option>Option A</option>
//         <option>Option B</option>
//         <option>Option C</option>
//       </select>
//       <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
//         <select className="px-4 py-2 border rounded-lg text-gray-600 bg-white w-full md:w-auto">
//           <option>Custom range</option>
//         </select>
//         <button className="px-4 py-2 border rounded-lg text-gray-600 bg-white flex items-center gap-2 w-full md:w-auto">
//           March 2020
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FilterBar;

import React, { useState } from "react";

const FilterBar = () => {
  const [selectedBranch, setSelectedBranch] = useState("All branches");
  const [selectedRange, setSelectedRange] = useState("Custom range");
  const [selectedDate, setSelectedDate] = useState("March 2020");

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out">
      {/* Branch Selection Dropdown */}
      <select
        className="px-4 py-2 border rounded-lg text-gray-600 bg-white w-full md:w-auto"
        value={selectedBranch}
        onChange={(e) => setSelectedBranch(e.target.value)}
      >
        <option>All branches</option>
        <option>Option A</option>
        <option>Option B</option>
        <option>Option C</option>
      </select>

      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        {/* Custom Range Dropdown */}
        <select
          className="px-4 py-2 border rounded-lg text-gray-600 bg-white w-full md:w-auto"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option>Custom range</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 6 months</option>
        </select>

        {/* Date Picker Dropdown */}
        <input
          type="month"
          className="px-4 py-2 border rounded-lg text-gray-600 bg-white w-full md:w-auto cursor-pointer"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterBar;
