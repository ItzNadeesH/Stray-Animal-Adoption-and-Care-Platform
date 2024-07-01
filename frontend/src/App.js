import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import store from "./store";
import React from "react";

// Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderComplete from "./pages/OrderComplete";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import DonationHome from "./components/DonationHomePage/DonationHome";
import DonationDisplay from "./components/DonationDisplay/DonationDisplay";
import AddDonation from "./components/AddDonation/AddDonation";
import DonationDetails from "./components/DonationDetails/DonationDetails";
import UpdateDonation from "./components/UpdateDonation/UpdateDonation";
import UpdateDonationBeforeConfirm from "./components/UpdateDonation/UpdateDonationinPreview";
import Register from "./components/Register/Register";
import MatheeshaLogin from "./components/Login/Login";
import DonationManager from "./components/DonationManager/DonationManager";
import DManagerRegister from "./components/ManagerRegister/DManagerRegsiter";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import SendPdf from "./components/SendPdf/SendPdf";
import DonationPreview from "./components/DonationPreview/DonationPreview";
import ContactDonationManager from "./components/ContactDonationManager/ContactDonationManager";
import FetchDisplayRequest from "./components/DisplayDonationRequests/FetchDisplayRequest";

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/product/:productId" element={<Product />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
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
          <Route path="/" element={<DonationHome />} />
          <Route path="/donationhome" element={<DonationHome />} />
          <Route path="/donationdisplay" element={<DonationDisplay />} />
          <Route path="/adddonation" element={<AddDonation />} />
          <Route path="/donationdetails" element={<DonationDetails />} />
          <Route path="/donationpreview" element={<DonationPreview />} />

          <Route path="/regi" element={<Register />} />
          <Route path="/log" element={<MatheeshaLogin />} />
          <Route path="/Admin" element={<DonationManager />} />

          <Route path="/ManagerRegister" element={<DManagerRegister />} />
          <Route path="/admindetails" element={<AdminDashboard />} />
          <Route path="/sendpdf" element={<SendPdf />} />

          <Route
            path="/contactdonationmanager"
            element={<ContactDonationManager />}
          />

          <Route path="/donationdetails/:id" element={<UpdateDonation />} />
          <Route
            path="/donationdetailsbeforeConfirm/:id"
            element={<UpdateDonationBeforeConfirm />}
          />

          <Route
            path="/acceptrejectrequest"
            element={<FetchDisplayRequest />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
