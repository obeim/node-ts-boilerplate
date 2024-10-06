import Joi from "joi";

export type RequesetSchemaType = {
  body?: Joi.ObjectSchema<any>;
  params?: Joi.ObjectSchema<any>;
};
