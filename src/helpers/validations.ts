import Joi from "joi";
import { RequesetSchemaType } from "../types";

export const loginSchema: RequesetSchemaType = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
};

export const createUserSchema: RequesetSchemaType = {
  body: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
};
