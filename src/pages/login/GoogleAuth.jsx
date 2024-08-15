/* eslint-disable react/prop-types */
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const GoogleAuth = ({ setUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${response.access_token}` },
          }
        );
        const userData = res.data;
        setUser(userData);
        // Stocker les données de l'utilisateur dans localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/home");
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <button
      onClick={() => login()}
      className="border rounded-2xl w-[94%] mx-auto p-3 bg-firstColor hover-custom-form"
    >
      {loading ? "Connecting..." : "Se connecter avec Google"}
    </button>
  );
};

export default GoogleAuth;
