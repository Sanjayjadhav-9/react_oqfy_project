import React from 'react';

const Greeting = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-2 text-gray-600 text-lg md:text-xl">
        <span>👋 Welcome back,</span>
        <span className="font-semibold">Michael</span>
      </div>
      <div className="text-sm text-gray-500 mt-1 md:text-base">25 May, 2023 · Tuesday</div>
    </div>
  );
};

export default Greeting;