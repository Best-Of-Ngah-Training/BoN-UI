import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import ResponsiveAppBar from "./pages/LandingPage/landingPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/home",
    element: <ResponsiveAppBar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="878036846411-t3305i1ulmpr26e1dfdvof7esr5gbfbl.apps.googleusercontent.com">
      <RouterProvider router={ROUTER} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
