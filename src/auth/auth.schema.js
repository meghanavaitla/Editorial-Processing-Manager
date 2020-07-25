const Joi = require('@hapi/joi');

const schema = Joi.object({
  username: Joi.string()
    .regex(/(^[a-zA-Z0-9_ ]*$)/)
    .min(2)
    .max(30)
    .trim()
    .required(),

  password: Joi.string()
    .trim()
    .min(6)
    .required(),
});

module.exports = schema;
