import joi from "joi";
export var movieSchema = joi.object({
    title: joi.string().required(),
    genre: joi.string().required(),
    platform: joi.string().required(),
    watched: joi.boolean(),
    comment: joi.string()
});
