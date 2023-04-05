const Joi = require('joi');

const validateUser = (user, createMod) => {
  const mode = createMod ? 'required' : 'optional';

  const result = Joi.object({
    email: Joi.string().email().presence(mode),
    password: Joi.string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[+-_?!@#$%^&*]).{8,}$/)
      .presence(mode),
    firstname: Joi.string().min(2).max(30).presence(mode),
    lastname: Joi.string().min(2).max(30).presence(mode),
    phone: Joi.string()
      .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)
      .presence(mode),
    street: Joi.string().min(5).max(50).presence(mode),
    zip: Joi.number().positive().integer().presence(mode),
    city: Joi.string().presence(mode),
    birthdateDay: Joi.number()
      .positive()
      .integer()
      .min(1)
      .max(31)
      .presence(mode),
    birthdateMonth: Joi.number()
      .positive()
      .integer()
      .min(1)
      .max(12)
      .presence(mode),
    birthdateYear: Joi.number().positive().integer().presence(mode),
  })
    .required()
    .min(1)
    .validate(user, { abortEarly: false }).error;

  if (result) {
    const errorMessages = result.details.map((error) => ({
      message: error.message,
    }));

    return { errorCount: result.details.length, errorMessages };
  }

  return result;
};

module.exports = { validateUser };
