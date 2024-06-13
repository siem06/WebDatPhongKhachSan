import React, { useState, useEffect } from "react";
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
import SelectedRoom from "./screens/SelectedRoom";
import ForgotPassword from "./screens/ForgotPassword";

import RoomDetail from "./screens/RoomDetail";
import Payment from "./screens/Payment";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
import AccountDetail from "./admin/pages/AccountDetail";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  console.log("app", loggedInUser);
  useEffect(() => {
    if (loggedInUser) return setLoggedIn(true);
  }, []);

  return (
    <div>
      {(!loggedInUser || loggedInUser?.roles.includes(1)) && (
        <>
          {loggedInUser ? (
            <Header loggedIn={loggedIn} user={loggedInUser} />
          ) : (
            <Header loggedIn={loggedIn} />
          )}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/room" element={<Room />} />
            <Route path="/room_detail" element={<RoomDetail />} />
            <Route path="/payment" element={<Payment />} />
            <Route
              path="/login"
              element={<Login setLoggedIn={setLoggedIn} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/profile"
              element={<Profile setLoggedIn={setLoggedIn} />}
            />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/cart" element={<SelectedRoom />} />
          </Routes>
          <Footer />
        </>
      )}

      {loggedInUser && loggedInUser?.roles.includes(2) && (
        <>
          <Menu setLoggedIn={setLoggedIn} />
          <Routes>
            <Route path="/detailProfile" element={<AccountDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manageroom" element={<ManageRoom />} />
            <Route path="/booking" element={<BookingRoom />} />
            <Route path="/manageaccount" element={<ManageAccount />} />
            <Route path="/managegeneral" element={<ManagerGeneral />} />
            <Route path="/supportCustomer" element={<Support />} />
          </Routes>
          <FooterAdmin />
        </>
      )}
    </div>
  );
}

export default App;
