import { Joi } from "express-validation";

export default {
    loginValidate : {
        body: Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required(),
        })
    }
}