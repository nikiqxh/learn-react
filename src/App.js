import "./styles/App.css";
import React from "react";
import { BrowserRouter } from "react-router";

import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    
    <BrowserRouter>

      <Navigation />
      <AppRouter/>

    </BrowserRouter>

    
  )
}

export default App;
