import { useState } from "react";
import SignUp from "./RegisterForm.jsx";
import GoogleAuth from "../login/GoogleAuth.jsx";

const Register = () => {
  const [, setUser] = useState(null);

  return (
    <section className="flex flex-row w-full h-[100vh] bg-firstColor text-white">
      <div className="flex flex-col justify-center border border-white w-[50%]">
        <p className="text-center">
          <GoogleAuth setUser={setUser} />
        </p>
      </div>
      <div className="flex flex-col justify-center w-[50%]">
        <SignUp />
      </div>
    </section>
  );
};

export default Register;
