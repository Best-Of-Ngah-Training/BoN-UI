import PropTypes from "prop-types";
export const PasswordInputError = ({ error }) => {
  if (!error) return null;

  return (
    <div className="h-[50px] text-center absolute ">
      <p className="text-red-500 text-sm leading-none">{error.message}</p>
    </div>
  );
};

PasswordInputError.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};
