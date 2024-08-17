import joi from "joi";
import { generalFields } from "../../Middleware/validation.js";

export const registerSchema = {

    body:joi.object({
        userName:joi.string().min(3).max(40).required().messages({
            'string.empty': 'userName is required',
            'string.min' : 'userName must be at least 3 characters',
            'string.max' : 'userName must be less than 40 characters'
        }),
        email:generalFields.email.messages({
            'string.empty': 'Email is required',
        }),
        password:generalFields.password.messages({
            'string.empty': 'Password is required',
            'string.min' : 'Password must be at least 8 characters',
        }),
        cpassword:joi.valid(joi.ref('password')).required(),
    })
}
export const loginSchema = {

    body:joi.object({
        email:generalFields.email.messages({
            'string.empty': 'Email is required',
        }),
        password:generalFields.password.messages({
            'string.empty': 'Password is required',
        }),
    })

}