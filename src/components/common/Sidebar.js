import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { label: 'Repositories', path: '/repositories', icon: '📁' },
    { label: 'Cloud Security', path: '/security', icon: '🔒' },
    { label: 'Settings', path: '/settings', icon: '⚙️' }
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200">
      <div className="p-4">
        <img src="/assets/logo.svg" alt="CodeAnt AI" className="h-8" />
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
              location.pathname === item.path ? 'bg-gray-100' : ''
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
