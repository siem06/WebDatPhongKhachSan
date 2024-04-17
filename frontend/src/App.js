import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Header from "./Layout/Header";
import About from "./screens/About";
import Blog from "./screens/Blog";
import Footer from "./Layout/Footer";
import "./App.css";
import Room from "./screens/Room";
import Contact from "./screens/Contact";
import Service from "./screens/Service";
import Menu from "./admin/layout/Menu";
import FooterAdmin from "./admin/layout/FooterAdmin";
import Dashboard from "./admin/pages/Dashboard";
import ManageRoom from "./admin/pages/ManageRoom";
import BookingRoom from "./admin/pages/BookingRoom";
import ManageAccount from "./admin/pages/ManagerAccount";
import ManagerGeneral from "./admin/pages/ManagerGeneral";
import Support from "./admin/pages/Support";
import ForgotPassword from "./screens/ForgotPassword";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Header loggedIn={loggedIn} />
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
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
      <Footer />

      {/* Admin */}
      {/* <Menu />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/home" exact element={<Dashboard />} />
        <Route path="/manageroom" exact element={<ManageRoom />} />
        <Route path="/booking" exact element={<BookingRoom />} />
        <Route path="/manageaccount" exact element={<ManageAccount />} />
        <Route path="/managegeneral" exact element={<ManagerGeneral />} />
        <Route path="/supportCustomer" exact element={<Support />} />
      </Routes>
      <FooterAdmin /> */}
    </div>
  );
}

export default App;
