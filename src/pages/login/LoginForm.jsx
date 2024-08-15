import { useState } from "react";
import { useLoginForm } from "../../zod/validation/useLoginForm.js";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { LoginSchema } from "../../zod/schema/loginSchema.js";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth.jsx";

const LoginForm = () => {
  const [, setUser] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm(LoginSchema);

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // TODO: Envoyez les données au serveur ou effectuez d'autres actions ici
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-[50%] bg-firstColor p-3 shadow-custom-form m-auto">
      <form className="w-[100%] p-5" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="pt-2 pb-10  font-bold text-center">LOGIN</h1>
        <input
          type="email"
          {...register("email")}
          className={`p-3 w-full rounded-2xl outline-none text-black ${errors.email ? "border-red-500" : ""}`}
          placeholder="Entrer votre adresse email"
        />
        <div className="h-[25px]">
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className={` p-3 w-full rounded-2xl outline-none text-black ${errors.password ? "border-red-500" : ""}`}
            placeholder="Entrer votre mot de passe"
          />
          <div
            onClick={togglePasswordVisibility}
            className="absolute my-auto inset-y-0 right-5 flex flex-col justify-center"
          >
            {showPassword ? (
              <EyeOutlined style={{ fontSize: "16px", color: "#08c" }} />
            ) : (
              <EyeInvisibleOutlined
                style={{ fontSize: "16px", color: "#08c" }}
              />
            )}
          </div>
        </div>
        <div className="h-[50px] text-sm leading-4">
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <Link to="/home">
          <button
            type="submit"
            className="border rounded-2xl w-full  p-3 bg-firstColor hover-custom-form"
          >
            Continuer
          </button>
        </Link>
      </form>
      <GoogleAuth setUser={setUser} />
      <Link to="/signUp">
        <p className="cursor-pointer pt-4 mx-auto">Créer un compte</p>
      </Link>
    </div>
  );
};

export default LoginForm;
