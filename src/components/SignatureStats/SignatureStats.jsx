import React from 'react';

export const SignatureStats = ({ title, initiated, pending }) => {
  const percentage = (pending / initiated) * 100;
  
  return (
    <div className="bg-white p-6 rounded-xl">
      <h3 className="font-medium text-gray-800 mb-6">{title}</h3>
      <div className="flex items-center gap-12">
      <div className="space-y-3 flex gap-6">
        <div className='space-y-3' >
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
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#f3f4f6"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#7c3aed"
              strokeWidth="12"
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
    </div>
  );
};
