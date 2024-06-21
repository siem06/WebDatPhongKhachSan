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
import ManageComment from "./admin/pages/ManageComment";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Page404 from "./screens/Page404";
import DetailBooking from "./pages/DetailBooking";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  console.log("app", loggedInUser);
  useEffect(() => {
    if (loggedInUser) return setLoggedIn(true);
  }, []);

  const Layout = ({ children }) => (
    <>
      {loggedInUser ? (
        <Header loggedIn={loggedIn} user={loggedInUser} />
      ) : (
        <Header loggedIn={loggedIn} />
      )}
      {children}
      <Footer />
    </>
  );
  const LayoutAdmin = ({ children }) => (
    <>
      {loggedInUser ? (
        <Menu setLoggedIn={setLoggedIn} />
      ) : (
        <Header loggedIn={loggedIn} />
      )}
      {children}
      <FooterAdmin />
    </>
  );
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/room"
        element={
          <Layout>
            <Room />
          </Layout>
        }
      />
      <Route
        path="/room_detail"
        element={
          <Layout>
            <RoomDetail />
          </Layout>
        }
      />
      <Route
        path="/payment"
        element={
          <ProtectedRoute isAllowed={loggedInUser} redirectTo="/login">
            <Layout>
              <Payment />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login setLoggedIn={setLoggedIn} />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route
        path="/blog"
        element={
          <Layout>
            <Blog />
          </Layout>
        }
      />
      <Route
        path="/service"
        element={
          <Layout>
            <Service />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute isAllowed={loggedInUser} redirectTo="/login">
            <Layout>
              <Profile setLoggedIn={setLoggedIn} />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/forgot"
        element={
          <Layout>
            <ForgotPassword />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <SelectedRoom />
          </Layout>
        }
      />
      <Route
        path="/bookingDetail"
        element={
          <Layout>
            <DetailBooking />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <Page404 />
          </Layout>
        }
      />
      <Route
        element={
          <ProtectedRoute
            isAllowed={loggedInUser && loggedInUser?.roles.includes(2)}
          />
        }
      >
        <Route
          path="/detailProfile"
          element={
            <LayoutAdmin>
              <AccountDetail />
            </LayoutAdmin>
          }
        />
        <Route
          path="/dashboard"
          element={
            <LayoutAdmin>
              <Dashboard />
            </LayoutAdmin>
          }
        />
        <Route
          path="/manageroom"
          element={
            <LayoutAdmin>
              <ManageRoom />
            </LayoutAdmin>
          }
        />
        <Route
          path="/booking"
          element={
            <LayoutAdmin>
              <BookingRoom />
            </LayoutAdmin>
          }
        />
        <Route
          path="/manageaccount"
          element={
            <LayoutAdmin>
              <ManageAccount />
            </LayoutAdmin>
          }
        />
        <Route
          path="/managegeneral"
          element={
            <LayoutAdmin>
              <ManagerGeneral />
            </LayoutAdmin>
          }
        />
        <Route
          path="/supportCustomer"
          element={
            <LayoutAdmin>
              <Support />
            </LayoutAdmin>
          }
        />
        <Route
          path="/managecomment"
          element={
            <LayoutAdmin>
              <ManageComment />
            </LayoutAdmin>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
