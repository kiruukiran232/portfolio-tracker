import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const Dashboard = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    axios.get('/stocks').then((response) => {
      setPortfolio(response.data.stocks);
      setTotalValue(response.data.totalValue);
    });
  }, []);

  return (
    <div>
      <h1>Portfolio Tracker</h1>
      <h2>Total Value: ${totalValue.toFixed(2)}</h2>
      <a href="/add">Add New Stock</a>
      {/* Render StockTable component */}
    </div>
  );
};

export default Dashboard;
