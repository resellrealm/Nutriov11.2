import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Utensils,
  Target,
  Heart,
  Award,
  History,
  Settings,
  User,
  X
} , Lock } from 'lucide-react';

const planTier = localStorage.getItem('planTier') || 'basic';

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { 
      path: '/dashboard', 
      icon: LayoutDashboard, 
      label: 'Dashboard',
      color: 'text-purple-500',
      bgHover: 'hover:bg-purple-50 dark:hover:bg-purple-900/20'
    },
    { 
      path: '/meal-planner', 
      icon: Utensils, 
      label: 'Meal Planner',
      color: 'text-orange-500',
      bgHover: 'hover:bg-orange-50 dark:hover:bg-orange-900/20'
    },
    { 
      path: '/goals', 
      icon: Target, 
      label: 'Goals',
      color: 'text-blue-500',
      bgHover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    { 
      path: '/favourites', 
      icon: Heart, 
      label: 'Favourites',
      color: 'text-pink-500',
      bgHover: 'hover:bg-pink-50 dark:hover:bg-pink-900/20'
    },
    { 
      path: '/achievements', 
      icon: Award, 
      label: 'Achievements',
      color: 'text-yellow-500',
      bgHover: 'hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
    },
    { 
      path: '/history', 
      icon: History, 
      label: 'History',
      color: 'text-teal-500',
      bgHover: 'hover:bg-teal-50 dark:hover:bg-teal-900/20'
    },
    { 
      path: '/account', 
      icon: User, 
      label: 'Account',
      color: 'text-indigo-500',
      bgHover: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
    },
  ];

  return (
    <>
      {/* Sidebar for desktop and mobile */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 lg:translate-x-0`}
        style={{
          paddingTop: 'max(env(safe-area-inset-top), 16px)',
        }}
      >
        {/* Sidebar Header with extra top spacing */}
        <div className="px-4 py-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Nutrio</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Nutrition Tracker</p>
              </div>
            </div>
            
            {/* Close button for mobile */}
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Navigation Links with spacious design */}
        <nav className="px-3 py-6 space-y-2 overflow-y-auto pt-[max(16px,env(safe-area-inset-top))]" style={{ height: 'calc(100vh - 140px)' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                      : `text-gray-700 dark:text-gray-300 ${item.bgHover}`
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon 
                      className={`w-5 h-5 ${isActive ? 'text-purple-600 dark:text-purple-400' : item.color}`} 
                    />
                    <span className="font-medium">{item.label}{planTier==='basic' && (item.path==='/goals' || item.path==='/meal-planner') && <Lock className='w-4 h-4 ml-2' />}</span>
                  </>
                )}
              </NavLink>}
            );
          })}
        </nav>

        {/* Bottom section with safe area padding */}
        <div 
          className="absolute bottom-0 left-0 right-0 px-4 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          style={{
            paddingBottom: 'max(env(safe-area-inset-bottom), 16px)',
          }}
        >
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Nutrio v11.0
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
