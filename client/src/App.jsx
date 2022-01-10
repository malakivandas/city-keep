import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/layout/Navbar';
import Heading from './components/layout/Heading';
import PrivateOutlet from './components/routing/PrivateOutlet';
import ReportsPage from './components/pages/ReportsPage';
import SettingsPage from './components/pages/SettingsPage';
import LandingPage from './components/pages/LandingPage';

function App() {
  const isAuthenticated = true;

  return (
    <Router>
      <Heading />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateOutlet isAuthenticated={isAuthenticated} />}>
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
      {isAuthenticated && <Navbar />}
    </Router>
  );
}

export default App;
