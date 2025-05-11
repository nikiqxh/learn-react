import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import { publicRoutes, privateRoutes } from '../router';

const AppRouter = () => {

  const isAuth = true;

  return (
    <>
      <Routes>
        {(isAuth ? privateRoutes : publicRoutes).map(route =>
          <Route 
            key={route.path}
            path={route.path}
            element={route.element}

          />
        )}

      <Route
        path="*"
        element={
          isAuth
            ? <Navigate to="/posts" replace />
            : <Navigate to="/login" replace />
        }
      />
      </Routes>
      
    </>
  )
}

export default AppRouter
