import Joi from "joi";
import { RequesetSchemaType } from "../types";

export const loginSchema: RequesetSchemaType = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
};
