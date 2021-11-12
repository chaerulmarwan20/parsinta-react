import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Login from "../views/auth/Login";
import UsersIndex from "../views/users/Index";
import UsersShow from "../views/users/Show";
import NotFound from "../views/errors/NotFound";
import Navbar from "../components/Navbar";

const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Navbar>
            <Home />
          </Navbar>
        }
      />
      <Route
        path="about"
        element={
          <Navbar>
            <About />
          </Navbar>
        }
      />
      <Route
        path="contact"
        element={
          <Navbar>
            <Contact />
          </Navbar>
        }
      />
      <Route
        path="users"
        element={
          <Navbar>
            <UsersIndex />
          </Navbar>
        }
      />
      <Route
        path="users/:identifier"
        element={
          <Navbar>
            <UsersShow />
          </Navbar>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
