import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/App.css";
import "./styles/Responsive.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import AboutUs from "./components/AboutUs";
import Conditions from "./components/Conditions";
import Privacy from "./components/Privacy";
import Error from "./components/Error";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-conditions" element={<Conditions />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/pricing" element={<Pricing />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
