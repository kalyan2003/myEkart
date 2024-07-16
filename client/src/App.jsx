import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth.jsx";
import { Home } from "./pages/Home.jsx";
import { Navbar } from "./components/navbar.jsx";
import { Login } from "./pages/login.jsx";
import Toaster from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Navbar />
      <p className="bg-red-500">Pavan kalyan</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
