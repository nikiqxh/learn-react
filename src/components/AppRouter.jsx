import React from 'react'
import { Routes, Route } from "react-router";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/Posts" element={<Posts />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
  )
}

export default AppRouter
