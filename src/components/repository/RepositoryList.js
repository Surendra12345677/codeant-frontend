import React from 'react';
import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {
  const repositories = [
    {
      id: 1,
      name: 'design-system',
      updatedAt: '1 hour ago',
      status: 'Public'
    },
    {
      id: 2,
      name: 'codeant-ci-app',
      updatedAt: '2 hours ago',
      status: 'Private'
    },
    {
      id: 3,
      name: 'analytics-dashboard',
      updatedAt: '3 hours ago',
      status: 'Public'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Repositories</h2>
        <input
          type="text"
          placeholder="Search repositories..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="space-y-2">
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
