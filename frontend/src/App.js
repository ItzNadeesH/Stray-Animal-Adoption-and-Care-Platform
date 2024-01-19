import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import Product from './pages/Product';
import Home from './pages/Home';
import CartItem from './components/payment/CartItem';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contat" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/product" element={<Product />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
