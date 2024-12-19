import React from 'react';

const RepositoryItem = ({ repository }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-200">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{repository.name}</h3>
          <p className="text-sm text-gray-500">Updated {repository.updatedAt}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          repository.status === 'Public' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {repository.status}
        </span>
      </div>
    </div>
  );
};

export default RepositoryItem;
