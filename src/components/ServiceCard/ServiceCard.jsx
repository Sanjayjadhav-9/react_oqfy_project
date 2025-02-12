import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="p-6 border rounded-xl bg-white hover:shadow-lg transition-shadow md:p-8 w-full max-w-sm mx-auto sm:max-w-md lg:max-w-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 md:text-xl">
        {title}
      </h3>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2 md:text-base">
        {description}
      </p>
      <button
        className="text-purple-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all md:text-base"
        onClick={() => document.getElementById('target-section')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Get started <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ServiceCard;