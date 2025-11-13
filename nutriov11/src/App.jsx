import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

// Layout
import AppLayout from './components/AppLayout';

// Pages
import Dashboard from './pages/Dashboard';
import MealPlanner from './pages/MealPlanner';
import Goals from './pages/Goals';
import Favourites from './pages/Favourites';
import Achievements from './pages/Achievements';
import History from './pages/History';
import Account from './pages/Account';
import MealAnalyzer from './pages/MealAnalyzer';
import Register from './pages/Register';
import Onboarding from './pages/Onboarding';

// Store (you'll need to import your actual store)
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            {/* Auth Routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/onboarding" element={<Onboarding />} />
            
            {/* Main App Routes with Layout */}
            <Route element={<AppLayout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/meal-planner" element={<MealPlanner />} />
              <Route path="/meal-analyzer" element={<MealAnalyzer />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/history" element={<History />} />
              <Route path="/account" element={<Account />} />
            </Route>
          </Routes>
          
          {/* Toast Notifications */}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </Router>
    // </Provider>
  );
}

export default App;
