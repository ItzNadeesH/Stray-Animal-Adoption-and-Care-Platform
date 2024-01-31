import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import store from './store';
// Pages
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Store from './pages/Store';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderComplete from './pages/OrderComplete';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
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
          <Route path="/store/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="/ordercomplete" element={<OrderComplete />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
