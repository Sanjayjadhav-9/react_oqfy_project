import React from 'react';
import { WalletCards } from 'lucide-react';

export const Greeting = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-gray-600">
        <span>👋 Welcome back,</span>
        <span className="font-semibold">Michael</span>
      </div>
      <div className="text-sm text-gray-500">25 May, 2023 · Tuesday</div>
    </div>
  );
};