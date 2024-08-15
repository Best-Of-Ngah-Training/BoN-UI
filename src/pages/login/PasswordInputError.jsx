/* eslint-disable react/prop-types */
export const PasswordInputError = ({ error }) => {
  if (!error) return null;

  return (
    <div className="h-[50px] text-center absolute ">
      <p className="text-red-500 text-sm leading-none">{error.message}</p>
    </div>
  );
};
