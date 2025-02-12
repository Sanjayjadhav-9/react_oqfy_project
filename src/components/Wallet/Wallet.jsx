import React from 'react';
import { Wallet as WalletIcon } from 'lucide-react';

const Wallet = () => {
  return (
    <div className="w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl">
      <div className="p-6 border-b border-gray-100 bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-700 font-medium">My Wallet</h2>
          <WalletIcon className="text-purple-600 w-5 h-5" />
        </div>
        <div className="text-3xl font-bold mb-2">₹ 2,50,000</div>
        <div className="text-sm">
          <span className="text-gray-500">Running low?</span>
          <button className="text-purple-600 ml-1 hover:underline">
            Notify admin
          </button>
          <span className="text-gray-500"> now.</span>
        </div>
      </div>
    </div>
  );
};

export default Wallet;