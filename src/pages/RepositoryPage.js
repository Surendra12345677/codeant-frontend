import React from 'react';
import Sidebar from '../components/common/Sidebar';
import RepositoryList from '../components/repository/RepositoryList';

const RepositoryPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <RepositoryList />
      </main>
    </div>
  );
};

export default RepositoryPage;
