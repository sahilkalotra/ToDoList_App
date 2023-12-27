import { Joi } from "express-validation";

export default {
    signUpValidate : {
        body: Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
        })
    }
}