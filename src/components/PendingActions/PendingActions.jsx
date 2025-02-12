import React from "react";

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

const PendingActions = () => {
  const pendingActions = [
    { id: "trd35468", daysLeft: 8, filesCount: 2 },
    { id: "trd55577", daysLeft: 10, filesCount: 1 },
    { id: "trd98347", daysLeft: 5, filesCount: 3 },
    { id: "trd73428", daysLeft: 9, filesCount: 1 },
    { id: "trd35468", daysLeft: 12, filesCount: 2 },
    { id: "trd55577", daysLeft: 2, filesCount: 3 },
    { id: "trd98347", daysLeft: 15, filesCount: 1 },
    { id: "trd73428", daysLeft: 6, filesCount: 2 },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4 md:max-w-lg lg:max-w-xl">
      <h2 className="text-gray-700 font-medium mb-4">Pending Actions</h2>
      <div className="p-6 bg-white rounded-lg shadow-sm max-h-82 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
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

export default PendingActions;
