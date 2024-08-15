/* eslint-disable react/prop-types */
import { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { PasswordInputError } from "./PasswordInputError.jsx";

export const PasswordInput = ({ register, name, error, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <div className="m-2 relative">
        <input
          type={showPassword ? "text" : "password"}
          {...register(name)}
          className={`p-3 w-full rounded-2xl outline-none pr-10 text-black ${error ? "border-red-500" : ""}`}
          placeholder={placeholder}
        />
        <div
          onClick={togglePasswordVisibility}
          className="absolute my-auto inset-y-0 right-5 flex flex-col justify-center cursor-pointer"
        >
          {showPassword ? (
            <EyeOutlined style={{ fontSize: "16px", color: "#08c" }} />
          ) : (
            <EyeInvisibleOutlined style={{ fontSize: "16px", color: "#08c" }} />
          )}
        </div>
      </div>
      <PasswordInputError error={error} />
    </div>
  );
};
