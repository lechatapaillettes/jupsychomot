import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import LandingPage from "./pages/LandingPage/LandingPage";
import ThankYou from "./pages/ThankYou/ThankYou";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Routes>
          {/* Landing page */}

          <Route exact path="/" element={<LandingPage />} />

          {/* Thank You page*/}

          <Route exact path="/thankyou" element={<ThankYou />} />

          {/* 404 */}

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;