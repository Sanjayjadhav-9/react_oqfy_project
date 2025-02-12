import React from 'react'

const FilterBar = () => {
  return (
    
         <div className="flex justify-between items-center">
              <select className="px-4 py-2 border rounded-lg text-gray-600 bg-white">
                <option>All branches</option>
              </select>
              <div className="flex items-center gap-4">
                <select className="px-4 py-2 border rounded-lg text-gray-600 bg-white">
                  <option>Custom range</option>
                </select>
                <button className="px-4 py-2 border rounded-lg text-gray-600 bg-white flex items-center gap-2">
                  March 2020
                </button>
              </div>
            </div>
      
  )
}

export default FilterBar
