import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <setion className="flex flex-row  w-full h-[100vh] bg-firstColor  text-white">
      <div className="flex flex-col justify-center border border-white  w-[50%]">
        <p className="text-center">LOGIN</p>
      </div>
      <div className="flex flex-col justify-center w-[50%]">
        <LoginForm />
      </div>
    </setion>
  );
};

export default Login;
