import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";

function App() {
	return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Testimony" element={<Testimony />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
