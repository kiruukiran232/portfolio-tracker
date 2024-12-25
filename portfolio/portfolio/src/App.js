import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StockForm from './components/StockForm';
import StockTable from './components/StockTable';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<StockForm />} />
        <Route path="/edit/:id" element={<StockForm />} />
      </Routes>
    </Router>
  );
};

export default App;
