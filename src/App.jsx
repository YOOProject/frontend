import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import ProductDetails from "./pages/productsDetailsPage/productDetailsPage";
import Cart from "./pages/cart/cart";
import Checkout from "./pages/checkout/checkout";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Orders from "./pages/orderSuccess/orderSuccess";
import Account from "./pages/myAccount/myAccount";
// import SellerDashboard from "./pages/sellerDashboard/sellerDashboard";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path ="/sellerDashboard" element={<SellerDashboard />} />" */}
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
             <Route path="/orders" element={<Orders />} />
            <Route path="/account" element={<Account />} /> 
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
