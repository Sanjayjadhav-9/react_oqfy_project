import React from 'react';

const SignatureStats = ({ title, initiated, pending }) => {
  const percentage = (pending / initiated) * 100;
  
  return (
    <div className="bg-white p-6 rounded-xl w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl">
      <h3 className="font-medium text-gray-800 mb-6 text-center md:text-left">{title}</h3>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          <div className='space-y-3'>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
              <span className="text-sm text-gray-600">Initiated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-300 rounded-sm"></div>
              <span className="text-sm text-gray-600">Pending</span>
            </div>
          </div>
          <div className='space-y-3'>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-800 rounded-sm"></div>
              <span className="text-sm text-gray-600">Signed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-100 rounded-sm"></div>
              <span className="text-sm text-gray-600">Expired</span>
            </div>
          </div>
        </div>
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#f3f4f6"
              strokeWidth="16"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#7c3aed"
              strokeWidth="16"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 56}`}
              strokeDashoffset={`${2 * Math.PI * 56 * (1 - percentage / 100)}`}
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-medium">{initiated}k</span>
            <span className="text-xs text-gray-500">Initiated</span>
          </div>
        </div>
      </div>
      <button
        className="mt-6 text-purple-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all mx-auto"
        onClick={() => document.getElementById('target-section')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Scroll to Details
      </button>
    </div>
  );
};

export default SignatureStats;