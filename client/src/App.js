import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default App;
