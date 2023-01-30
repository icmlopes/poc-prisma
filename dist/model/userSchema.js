import joi from "joi";
export var signUpSchema = joi.object({
    name: joi
        .string().max(30).required(),
    email: joi
        .string()
        .pattern(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
        .required(),
    password: joi.string().max(40).required()
});
