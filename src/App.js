import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import SingalBlogs from "./pages/SingalBlogs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShipingPolicy from "./pages/ShipingPolicy";
import TermandConditions from "./pages/TermandConditions";
import SingalProduct from "./pages/SingalProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contacts" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="product" element={<SingalProduct />} />
            <Route path="Blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<SingalBlogs />} />
            <Route path="Compare-Products" element={<CompareProduct />} />
            <Route path="wish-list" element={<Wishlist />} />
            <Route path="Login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shiping-policy" element={<ShipingPolicy />} />
            <Route path="terms-conditions" element={<TermandConditions />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="sign-up" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
