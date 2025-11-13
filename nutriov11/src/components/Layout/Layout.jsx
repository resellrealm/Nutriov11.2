import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import StickyHeader from './StickyHeader';
import Sidebar from './Sidebar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const planTier = (typeof window !== 'undefined' && localStorage.getItem('planTier')) || 'basic';
  const restrictedPaths = ['/goals', '/meal-planner'];
  React.useEffect(() => {
    if (planTier === 'basic' && restrictedPaths.includes(location.pathname)) {
      // soft redirect to dashboard if basic tries to access restricted path
      window.history.replaceState({}, '', '/');
    }
  }, [location.pathname]);


  // Get page title based on route
  const getPageTitle = (pathname) => {
    const titles = {
      '/': 'Dashboard',
      '/analyze': 'Analyze Meal',
      '/meal-planner': 'Meal Planner',
      '/goals': 'Goals',
      '/favourites': 'Favourites',
      '/achievements': 'Achievements',
      '/history': 'History',
      '/account': 'Account',
    };
    return titles[pathname] || 'Nutrio';
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sticky Header - Always visible */}
      <StickyHeader 
        title={getPageTitle(location.pathname)}
        onMenuClick={toggleSidebar}
       isSidebarOpen={isSidebarOpen} />

      {/* Sidebar Drawer */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content - Scrolls under header */}
      <main className="p-4 sm:p-6 lg:p-8" style={{ paddingTop: "calc(60px + env(safe-area-inset-top))" }}>
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
