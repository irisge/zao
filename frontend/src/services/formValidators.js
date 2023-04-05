const validateEmail = (email) => {
  const mail = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
  return mail.test(email);
};

export const validatePassword = (password) => {
  const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[+-_?!@#$%^&*]).{8,}$/;
  return pass.test(password);
};

export default validateEmail;
