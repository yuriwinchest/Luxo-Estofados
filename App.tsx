import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Sofas } from './pages/Sofas';
import { Poltronas } from './pages/Poltronas';
import { ProductDetail } from './pages/ProductDetail';
import { Collections } from './pages/Collections';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sofas" element={<Sofas />} />
            <Route path="/poltronas" element={<Poltronas />} />
            <Route path="/colecoes" element={<Collections />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}