import React, { useState } from "react";
import GoogleAuth from "../../Components/GoogleAuth";
import LoginForm from "./LoginForm";

const Login = () => {
  const [user, setUser] = useState(null);

  return (
    <section className="flex flex-row w-full h-[100vh] bg-firstColor text-white">
      <div className="flex flex-col justify-center border border-white w-[50%]">
        <p className="text-center">
          <GoogleAuth setUser={setUser} />
        </p>
      </div>
      <div className="flex flex-col justify-center w-[50%]">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
