import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6">
        <div className="text-2xl font-bold text-purple-800">DQFY</div>
        <ul className="flex space-x-6">
          <li>Services</li>
          <li>User Management</li>
          <li>My Orders</li>
          <li>Reports</li>
          <li>Stamp Inventory</li>
          <li>Bar Codes</li>
          <li>Invoice</li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center">M</div>
        </div>
      </nav>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">My Wallet</h2>
          <p className="text-3xl font-semibold">₹ 2,50,000</p>
          <p className="text-sm text-gray-500">Current Balance</p>
          <button className="mt-4 text-purple-800">Notify admin now.</button>

          <h2 className="mt-6 text-lg font-bold">Pending Actions</h2>
          <ul className="space-y-4 mt-4">
            <li className="p-3 bg-gray-100 rounded-md">#trd35468 - 10 days left</li>
            <li className="p-3 bg-gray-100 rounded-md">#33255577 - 10 days left</li>
            <li className="p-3 bg-gray-100 rounded-md">#76298347 - 10 days ago</li>
            <li className="p-3 bg-gray-100 rounded-md">#65873428 - 10 days ago</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-span-9 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Frequently Used</h2>
            <select className="border rounded-md p-2">
              <option>All branches</option>
              <option>Branch 1</option>
              <option>Branch 2</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md">Contract Execution Upload</div>
            <div className="p-4 bg-white rounded-lg shadow-md">E-Stamp Services</div>
            <div className="p-4 bg-white rounded-lg shadow-md">E-Sign Services</div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md">Total Orders: 18</div>
            <div className="p-4 bg-white rounded-lg shadow-md">In Progress: 10</div>
            <div className="p-4 bg-white rounded-lg shadow-md">Completed: 5</div>
            <div className="p-4 bg-white rounded-lg shadow-md">Cancelled: 3</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md">E-sign Count Chart</div>
            <div className="p-4 bg-white rounded-lg shadow-md">E-stamp Count Chart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;