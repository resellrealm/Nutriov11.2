import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300"
      style={{
        paddingTop: 'max(env(safe-area-inset-top), 12px)',
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Hamburger + Page Title */}
          <div className="flex items-center space-x-3">
            {/* Hamburger Menu - Hidden when sidebar is open */}
            {!isSidebarOpen && (
              <button
                onClick={onMenuClick}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            )}
            
            {/* Page Title */}
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Nutrio
            </h1>
          </div>

          {/* Right side: Additional header items can go here */}
          <div className="flex items-center space-x-4">
            {/* Placeholder for profile, notifications, etc. */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
