import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import Product from './pages/Product';
import Home from './pages/Home';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
