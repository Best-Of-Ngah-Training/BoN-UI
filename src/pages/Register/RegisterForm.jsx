import { useLoginForm } from "../../zod/validation/useLoginForm.js";
import { signInSchema } from "../../zod/schema/signInSchema.js";
import { Link } from "react-router-dom";
import { PasswordInput } from "../login/PasswordInput.jsx";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm(signInSchema);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // TODO: Envoyez les données au serveur ou effectuez d'autres actions ici
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[50%] bg-firstColor shadow-custom-form p-5 m-auto"
    >
      <h1 className="pt-2 pb-10 font-bold text-center">REGISTER</h1>
      <div className="m-2 relative">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Entrez votre prénom(s)"
          className={`p-3 rounded-2xl outline-none text-black w-full ${errors.firstName ? "border-red-500" : ""}`}
          {...register("firstName")}
        />
        {errors.firstName && (
          <div className="p-1 bg-gray-300 top-[2em] rounded-lg absolute text-red-500 text-sm m-2">
            {errors.firstName.message}
          </div>
        )}
      </div>
      <div className="m-2 relative">
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Entrez votre nom(s)"
          className={`p-3 rounded-2xl w-full outline-none text-black ${errors.lastName ? "border-red-500" : ""}`}
          {...register("lastName")}
        />
        {errors.lastName && (
          <p className="p-1 bg-gray-300 top-[2em] rounded-lg absolute text-red-500 text-sm m-2">
            {errors.lastName.message}
          </p>
        )}
      </div>
      <div className="m-2 relative">
        <input
          type="email"
          className={`w-full p-3 rounded-2xl outline-none text-black ${errors.email ? "border-red-500" : ""}`}
          placeholder="Entrez votre adresse email"
          {...register("email")}
        />
        {errors.email && (
          <p className="p-1 bg-gray-300 top-[2em] rounded-lg absolute text-red-500 text-sm m-2">
            {errors.email.message}
          </p>
        )}
      </div>
      <PasswordInput
        register={register}
        name="password"
        placeholder="Entrer votre mot de passe"
      />
      <PasswordInput
        register={register}
        name="password2"
        placeholder="Confirmer votre mot de passe"
        error={errors.password2}
      />
      <div className="  h-[55px]"></div>
      <button
        type="submit"
        className="border rounded-2xl m-2 p-3 bg-firstColor hover-custom-form"
      >
        S&apos;inscrire
      </button>
      <Link to="/">
        <p className="text-left cursor-pointer pt-3">
          J&apos;ai déjà un compte
        </p>
      </Link>
    </form>
  );
};

export default SignUp;
