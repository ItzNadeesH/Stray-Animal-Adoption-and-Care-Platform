import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import Product from './pages/Product';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
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
