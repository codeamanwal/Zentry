import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import TransactionTable from "../components/TransactionTableCompleted";

function Completed() {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-64">
        <SearchBar />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto p-5 bg-white rounded-md shadow">
              <div className="space-y-8  divide-y divide-gray-300">
                <h2 className="text-lg leading-6 font-medium text-gray-900 border-b pb-8">
                  List of Completed SSI Confirmations
                </h2>
              </div>
              <TransactionTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Completed;
