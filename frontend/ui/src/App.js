import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Header from "./Layout/Header";
import About from "./screens/About";
import Blog from "./screens/Blog";
import Footer from './Layout/Footer';
import "./App.css";
import Room from './screens/Room';
import Contact from './screens/Contact';
import Service from './screens/Service';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    
    <div>
    <Header loggedIn={loggedIn} /> {/* Hiển thị Header ở đây */}
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/room" element={<Room />} />
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
