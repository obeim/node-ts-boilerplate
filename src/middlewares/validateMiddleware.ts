import { Request, Response, NextFunction } from "express";
import _ from "lodash";
import { RequesetSchemaType } from "../types";

const validateMiddleware = (schema: RequesetSchemaType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (schema && (schema.body || schema.params)) {
      const bodyErrors = schema.body
        ? schema.body.options({ abortEarly: false }).validate(req.body)
        : undefined;

      const paramsErrors = schema.params
        ? schema.params.options({ abortEarly: false }).validate(req.params)
        : undefined;

      const response: Record<string, unknown> = {};
      if (schema.body && bodyErrors && bodyErrors.error)
        response.body = bodyErrors.error?.details.map((item) => item.message);

      if (schema.params && paramsErrors && paramsErrors.error)
        response.params = paramsErrors?.error?.details.map(
          (item) => item.message
        );

      if (_.isEmpty(response)) next();
      else res.status(400).json(response);
    } else next();
  };
};

export default validateMiddleware;
