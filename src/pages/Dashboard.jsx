import React from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';

function Dashboard() {
    return (
        <div>
        <Sidebar />

        <div className="lg:pl-72">
        <SearchBar />
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
                <p> Dashboard </p>
            </div>
          </main>
        </div>
      </div>
    );
}

export default Dashboard;