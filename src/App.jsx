// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import AboutPage from "./assets/pages/AboutPage";
import NavBar from "./componenets/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
