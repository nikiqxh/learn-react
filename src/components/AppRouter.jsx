import React from 'react'
import { Routes, Route } from "react-router";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<PostIdPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
  )
}

export default AppRouter
