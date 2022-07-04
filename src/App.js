import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Testimony from "./Pages/Testimony";
import Services from "./Pages/Service";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer";

function App() {
	return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Testimony" element={<Testimony />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
