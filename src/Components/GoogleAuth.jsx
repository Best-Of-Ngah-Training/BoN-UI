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
        setUser(res.data);
        navigate("/home"); // Redirection après succès
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <button onClick={() => login()} className="border border-black p-5">
      {loading ? "Connecting..." : "Se connecter avec Google"}
    </button>
  );
};

export default GoogleAuth;
