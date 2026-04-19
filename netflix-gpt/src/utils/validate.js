export const checkValidate = (email, password) => {
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isValidPassword =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,64}$/.test(password);

  if (!isValidEmail) return "Email is not Valid";
  if (!isValidPassword) return "Password is not Valid";
  return null;
};
  