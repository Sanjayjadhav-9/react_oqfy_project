import React from 'react';
import { Wallet } from '../Wallet/Wallet';
import { ServiceCard } from '../ServiceCard/ServiceCard';
import { OrderStats } from '../OrderStats/OrderStats';
import { SignatureStats } from '../SignatureStats/SignatureStats';
import { Greeting } from '../Greeting/Greeting';

function MainComponent() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-1xl mx-auto">
       
        <div className="grid grid-cols-12 gap-6 p-6">
          <div className="col-span-3">
          <Greeting  />
            <div className="bg-white rounded-xl shadow-sm">
                
              <Wallet />
            </div>
          </div>
          <div className="col-span-9 space-y-6">
            <div className="grid grid-cols-3 gap-6">
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
            <div className="flex justify-between items-center">
              <select className="px-4 py-2 border rounded-lg text-gray-600 bg-white">
                <option>All branches</option>
              </select>
              <div className="flex items-center gap-4">
                <select className="px-4 py-2 border rounded-lg text-gray-600 bg-white">
                  <option>Custom range</option>
                </select>
                <button className="px-4 py-2 border rounded-lg text-gray-600 bg-white flex items-center gap-2">
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
            <div className="grid grid-cols-2 gap-6">
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
