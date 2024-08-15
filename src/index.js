import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProfilePage from "./pages/Profile/Profile.jsx";
import Home from "./pages/LandingPage/LandingPageSection.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";

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
    element: <Home />,
  },
  {
    path: "/home/profile",
    element: <ProfilePage />,
  },
  {
    path: "/home/contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <RouterProvider router={ROUTER} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
