import "./styles/App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router";

import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/context";

function App() {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
