import React from 'react';
import Greeting from '../Greeting/Greeting';
import PendingActions from '../PendingActions/PendingActions';
import Wallet from '../Wallet/Wallet';
import ServiceCard from '../ServiceCard/ServiceCard';
import OrderStats from '../OrderStats/OrderStats';
import SignatureStats from '../SignatureStats/SignatureStats';

const MainComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 transition-all duration-300 ease-in-out">
      <div className="max-w mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
          <div className="lg:col-span-3 space-y-6">
            <Greeting />
            <Wallet />
            <div className="bg-white rounded-xl shadow-sm p-4">
              <PendingActions/>
            </div>
          </div>
          <div className="lg:col-span-9 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                title="Contract Execution Upload"
                description="Lorem ipsum dolor sit amet consectetur. Senectus sed amet sit tempus ornare."
              />
              <ServiceCard
                title="E-Stamp Services"
                description="Lorem ipsum dolor sit amet consectetur. Morbi adipiscing vulputate morbi..."
              />
              <ServiceCard
                title="E-Sign Services"
                description="Lorem ipsum dolor sit amet consectetur. Mauris enim pulvinar interdum augue eu."
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <select className="px-4 py-2 border rounded-lg text-gray-600 bg-white w-full md:w-auto">
                <option>All branches</option>
              </select>
              <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <select className="px-4 py-2 border rounded-lg text-gray-600 bg-white w-full md:w-auto">
                  <option>Custom range</option>
                </select>
                <button className="px-4 py-2 border rounded-lg text-gray-600 bg-white flex items-center gap-2 w-full md:w-auto">
                  March 2020
                </button>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">Order Details</h2>
                <button className="text-purple-600 hover:underline">View All</button>
              </div>
              <OrderStats />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SignatureStats title="E-sign Count" initiated={30} pending={20} />
              <SignatureStats title="E-stamp Count" initiated={30} pending={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;