import React from "react";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

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
import WebDevelopment from "./components/Projects/WebDevelopment";
import WebDesign from "./components/Projects/WebDesign";
import UxUiDesign from "./components/Projects/UxUiDesign";
import AppDevelopment from "./components/Projects/AppDevelopment";

const CoursesLayout = () => {
  return <Outlet />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-conditions" element={<Conditions />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="projects" element={<CoursesLayout />}>
            <Route index element={<Projects />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="web-design" element={<WebDesign />} />
            <Route path="ux-ui-design" element={<UxUiDesign />} />
            <Route path="app-development" element={<AppDevelopment />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
