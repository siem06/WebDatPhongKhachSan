import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Menu from './layout/Menu';
import Header from './layout/Header';
import Dashboard from './pages/Dashboard';
import Footer from './layout/Footer';
import ManageRoom from './pages/ManageRoom';
import BookingRoom from './pages/BookingRoom';
function App() {
  return (
    <div >
      <Menu />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/home" exact element={<Dashboard />} />
        <Route path="/manageroom" exact element={<ManageRoom />} />
        <Route path="/booking" exact element={<BookingRoom/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
