const Joi = require('joi');

const validateAuth = (auth) => {
  const result = Joi.object({
    email: Joi.string().email().presence('required'),
    password: Joi.string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[+-_?!@#$%^&*]).{8,}$/)
      .presence('required'),
  })
    .required()
    .validate(auth, { abortEarly: false }).error;

  if (result) {
    const errorMessages = result.details.map((error) => ({
      message: error.message,
    }));
    return { errorCount: result.details.length, errorMessages };
  }

  return result;
};

module.exports = { validateAuth };
