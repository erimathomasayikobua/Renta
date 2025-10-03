import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./App.css";
import "./index.css";
import Rides from "./rides";
import Houses from "./houses";
import Services from "./services";
import Login from "./login";
import Signup from "./signup";
import Profile from "./profile";
import Message from "./message";
import Terms from "./terms";
import Admin from "./admin";
import Contact from "./contact";
import About from "./AboutUs";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isOpen, setIsOpen] = useState(false); 
  
  return (
    <Router>
      {/* Top Bar */}
      <header className="TopBar">
        <h1>Renta</h1>

        {/* Menu Icon */}
        <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={24} />
        </button>
      </header>

      {/* Sidebar */}
      <nav className={`SideMenu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
        <Link to="/message" onClick={() => setIsOpen(false)}>Message</Link>
        <Link to="/terms" onClick={() => setIsOpen(false)}>Terms & Conditions</Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
      </nav>

      {/* Main Content */}
      <main className="card">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <h2>Welcome to Renta</h2>
                <div className="content">
                  <Link to="/rides">
                    <button>
                      <img src="/001-01.png" alt="Rides logo" />
                      Rides
                    </button>
                  </Link>

                  <Link to="/houses">
                    <button>
                      <img src="/Houses-01.png" alt="Housing logo" />
                      Housing
                    </button>
                  </Link>
                  <br />

                  <Link to="/services">
                    <button>
                      <img src="/services.png" alt="Services logo" />
                      Services
                    </button>
                  </Link>
                </div>
              </>
            }
          />

          {/* Auth pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected pages */}
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/message" element={<ProtectedRoute><Message /></ProtectedRoute>} />
          <Route path="/terms" element={<ProtectedRoute><Terms /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/houses" element={<ProtectedRoute><Houses /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
          <Route path="/rides" element={<ProtectedRoute><Rides /></ProtectedRoute>} />

          {/* Public pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="read-the-docs">Empire Tech Limited</p>
        <p className="read-the-docs">© 2025 Renta. All rights reserved.</p>
        <p className="read-the-docs"><Link to="/privacy">Privacy policy</Link></p>
        <p className="read-the-docs"><Link to="/terms">Terms & Conditions</Link></p>
        <p className="read-the-docs"><Link to="/contact">Contact Us</Link></p>
        <p className="read-the-docs"><Link to="/about">About Us</Link></p>
      </footer>
    </Router>
  );
}

export default App