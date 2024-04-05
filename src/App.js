import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import Navbar from "./Components/UI/Navbar/Navbar";
import AppRouter from "./Components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
