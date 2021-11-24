import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

//Components
import Navbar from './components/layout/Navbar';
import ReportsPage from './components/pages/ReportsPage';
import SettingsPage from './components/pages/SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
