import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BookList from './pages/BookList';
import CartPage from './pages/CartPage';
function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <header>
          <Link to="/">Bookstore</Link> | <Link to="/cart">Cart</Link>
        </header>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;