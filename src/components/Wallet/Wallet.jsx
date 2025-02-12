import React from 'react';
import { Wallet as WalletIcon } from 'lucide-react';

const PendingAction = ({ id, daysLeft, filesCount }) => (
  <div className="py-3">
    <div className="flex justify-between items-center mb-1">
      <span className="text-gray-600">#{id}</span>
      <span className="text-sm text-gray-500">{daysLeft} days left</span>
    </div>
    <div className="text-sm text-gray-500">
      {filesCount} files are waiting to be Uploaded
    </div>
  </div>
);

export const Wallet = () => {
  const pendingActions = [
    { id: 'trd35468', daysLeft: 10, filesCount: 2 },
    { id: '33255577', daysLeft: 10, filesCount: 2 },
    { id: '76298347', daysLeft: 15, filesCount: 3 },
    { id: '85873428', daysLeft: 10, filesCount: 2 },
  ];

  return (
    <div>
      <div className="p-6 border-b border-gray-100">
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
      <div className="p-6">
        <h2 className="text-gray-700 font-medium mb-4">Pending Actions</h2>
        <div className="space-y-2">
          {pendingActions.map((action, index) => (
            <React.Fragment key={action.id}>
              <PendingAction {...action} />
              {index < pendingActions.length - 1 && (
                <div className="border-b border-gray-100"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
