import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Error from "../pages/Error";
import { privateRoutes, publickRoutes } from "../router/routes";
import Login from "../pages/Login";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Error />} />
    </Routes>
  ) : (
    <Routes>
      {publickRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
