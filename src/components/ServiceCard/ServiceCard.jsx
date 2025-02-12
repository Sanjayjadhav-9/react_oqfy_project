import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ServiceCard = ({ title, description }) => {
  return (
    <div className="p-6 border rounded-xl bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
      <button className="text-purple-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
        Get started <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
