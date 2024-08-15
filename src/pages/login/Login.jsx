import AnimateText from "../../Styles/TextAnimation/animateText.jsx";
import LoginForm from "./LoginForm.jsx";

const Login = () => {
  return (
    <section className=" bg-loginbg bg-cover w-full h-[100vh] bg-firstColor text-white">
      <div className="w-full flex flex-row h-full bg-firstLowOpacity">
        <div className="flex flex-col justify-center max-md:hidden  w-[50%]">
          <AnimateText />
        </div>
        <div className="flex flex-col justify-center max-md:w-[100%]   w-[50%]">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
