import { useState } from "react";
import { useLoginForm } from "../../zod/validation/useLoginForm.js";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { LoginSchema } from "../../zod/schema/loginSchema.js";
import { Link } from "react-router-dom";

const LoginForm = () => {
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
    <form
      className="flex flex-col w-[50%] bg-firstColor shadow-custom-form p-5 m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="pt-2 pb-10 font-bold text-center">LOGIN</h1>
      <input
        type="email"
        {...register("email")}
        className={`m-2 p-3 rounded-2xl outline-none text-black ${errors.email ? "border-red-500" : ""}`}
        placeholder="Entrer votre adresse email"
      />
      <div className="h-[25px]">
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="m-2 relative">
        <input
          type={showPassword ? "text" : "password"}
          {...register("password")}
          className={` p-3 w-full rounded-2xl outline-none pr-10 text-black ${errors.password ? "border-red-500" : ""}`}
          placeholder="Entrer votre mot de passe"
        />
        <div
          onClick={togglePasswordVisibility}
          className="absolute my-auto inset-y-0 right-5 flex flex-col justify-center"
        >
          {showPassword ? (
            <EyeOutlined style={{ fontSize: "16px", color: "#08c" }} />
          ) : (
            <EyeInvisibleOutlined style={{ fontSize: "16px", color: "#08c" }} />
          )}
        </div>
      </div>
      <div className="h-[50px] text-sm leading-4">
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <Link to="/home" className="m-2">
        <button
          type="submit"
          className="border rounded-2xl w-full  p-3 bg-firstColor hover-custom-form"
        >
          Continuer
        </button>
      </Link>

      <Link to="/signUp">
        <p className="text-left cursor-pointer pt-3">Sing up</p>
      </Link>
    </form>
  );
};

export default LoginForm;
