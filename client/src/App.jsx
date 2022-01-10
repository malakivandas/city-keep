import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/layout/Navbar';
import Heading from './components/layout/Heading';
import AuthOutlet from './components/routing/AuthOutlet';
import NoAuthOutlet from './components/routing/NoAuthOutlet';
import ReportsPage from './components/pages/ReportsPage';
import SettingsPage from './components/pages/SettingsPage';
import LandingPage from './components/pages/LandingPage';

function App() {
  const isAuthenticated = false;

  return (
    <Router>
      {!isAuthenticated && <Heading />}
      <Routes>
        <Route element={<NoAuthOutlet isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route element={<AuthOutlet isAuthenticated={isAuthenticated} />}>
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
      {isAuthenticated && <Navbar />}
    </Router>
  );
}

export default App;
