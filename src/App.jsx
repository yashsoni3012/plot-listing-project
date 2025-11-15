import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import Categories from "./pages/Categories";
import Listing from "./pages/Listing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./ScrollToTop"; // Import ScrollToTop
import ScrollToTopBtn from "./ScrollToTopBtn";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          {/* Add ScrollToTop here - inside BrowserRouter but before other components */}
          <ScrollToTop />
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer/>
           <ScrollToTopBtn />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;