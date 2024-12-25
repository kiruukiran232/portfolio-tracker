import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../services/api';

const StockForm = () => {
  const [formData, setFormData] = useState({ stockName: '', ticker: '', quantity: 1, buyPrice: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/stocks/${id}`, formData).then(() => navigate('/'));
    } else {
      axios.post('/stocks', formData).then(() => navigate('/'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Stock Name" value={formData.stockName} onChange={(e) => setFormData({ ...formData, stockName: e.target.value })} />
      <input type="text" placeholder="Ticker" value={formData.ticker} onChange={(e) => setFormData({ ...formData, ticker: e.target.value })} />
      <input type="number" placeholder="Quantity" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} />
      <input type="number" placeholder="Buy Price" value={formData.buyPrice} onChange={(e) => setFormData({ ...formData, buyPrice: e.target.value })} />
      <button type="submit">{id ? 'Update' : 'Add'} Stock</button>
    </form>
  );
};

export default StockForm;
