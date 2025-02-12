import React from 'react';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

const StatCard = ({ number, label, percentage, trend, icon }) => (
  <div className="bg-gray-50/80 p-4 rounded-xl">
    <div className="flex justify-between items-start">
      <div>
        <div className="text-2xl font-bold text-gray-800">{number}</div>
        <div className="text-gray-500 text-sm">{label}</div>
      </div>
      <div className="text-purple-600">{icon}</div>
    </div>
    <div className={`text-sm mt-2 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
      {trend === 'up' ? '↑' : '↓'} {percentage}
    </div>
  </div>
);

export const OrderStats = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <StatCard
        number={18}
        label="Total Orders"
        percentage="12.4%"
        trend="up"
        icon={<Package className="w-5 h-5" />}
      />
      <StatCard
        number={10}
        label="In progress"
        percentage="12.4%"
        trend="up"
        icon={<Clock className="w-5 h-5" />}
      />
      <StatCard
        number={5}
        label="Completed Order"
        percentage="12.4%"
        trend="up"
        icon={<CheckCircle className="w-5 h-5" />}
      />
      <StatCard
        number={3}
        label="Cancelled Order"
        percentage="2.4%"
        trend="down"
        icon={<XCircle className="w-5 h-5" />}
      />
    </div>
  );
};
