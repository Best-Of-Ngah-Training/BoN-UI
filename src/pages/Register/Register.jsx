import SingUp from "../Register/RegisterForm";

const Register = () => {
  return (
    <setion className="flex flex-row  w-full h-[100vh] bg-firstColor  text-white">
      <div className="flex flex-col justify-center border border-white  w-[50%]">
        <p className="text-center">REGISTER</p>
      </div>
      <div className="flex flex-col justify-center w-[50%]">
        <SingUp />
      </div>
    </setion>
  );
};

export default Register;
